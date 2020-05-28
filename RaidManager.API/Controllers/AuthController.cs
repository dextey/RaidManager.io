using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RaidManager.API.DataTransferObjects;
using RaidManager.API.Interfaces;
using RaidManager.API.Models;

namespace RaidManager.API.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDTO userForRegister)
        {
            //validate request

            userForRegister.username = userForRegister.username.ToLower();

            if(await _authRepository.UserExists(userForRegister.username))
            {
                return BadRequest("Username already exists");
            }

            var userToCreate = new User
            {
                Username = userForRegister.username
            };

            var createdUser = await _authRepository.RegisterUser(userToCreate, userForRegister.password);

            return StatusCode(201);
        }
    }
}