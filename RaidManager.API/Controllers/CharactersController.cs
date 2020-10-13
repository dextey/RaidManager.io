using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RaidManager.API.Data;
using RaidManager.API.Models;

namespace RaidManager.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CharactersController : ControllerBase
    {
        private readonly DataContext _context; 

        public CharactersController(DataContext context)
        {
            _context = context;
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

        [HttpPost]
        public async Task<IActionResult> PostCharacter(Character character) 
        {
            _context.Characters.Add(character);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(character), new {
                id = character.Id
            }, character);
        }
    }
}