using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RaidManager.API.Data;
using RaidManager.API.DataTransferObjects;
using RaidManager.API.Interfaces;
using RaidManager.API.Models;

namespace RaidManager.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CharactersController : ControllerBase
    {
        private readonly DataContext _context; 

        private readonly ICharacterRepository _characterRepository;

        public CharactersController(DataContext context, ICharacterRepository characterRepository)
        {
            _context = context;
            _characterRepository = characterRepository;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetCharacters() 
        {
            var characters = await _context.Characters.ToListAsync();
            return Ok(characters);
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCharacter(int id)
        {
            var character = await _context.Characters.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(character);
        }

        [AllowAnonymous]
        [HttpPost("add")]
        public async Task<IActionResult> AddIfNotExistsCharacter(CharacterToAddDTO characterToAdd) 
        {
            if(await _characterRepository.CharacterExists(characterToAdd)) 
            {
                // 409 conflict seems to be most appropriate status code
                return StatusCode(409);
            }

            var character = new Character 
            {
                Name = characterToAdd.Name,
                Realm = characterToAdd.Realm,
                Region = characterToAdd.Region
            };

            var addedCharacter = await _characterRepository.Add(character);

            return StatusCode(201);
        }
    }
}