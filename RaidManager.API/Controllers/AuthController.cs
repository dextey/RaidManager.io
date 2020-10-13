using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository authRepository, IConfiguration config)
        {
            _authRepository = authRepository; 
            _config = config;
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

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDTO userForLogin)
        {
            var userFromRepo = await _authRepository.Login(userForLogin.Username, userForLogin.Password);

            if(userFromRepo == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            
            var token = _authRepository.CreateTokenFromClaims(claims, DotNetEnv.Env.GetString("APP_TOKEN"), tokenHandler);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });
        }
    }
}