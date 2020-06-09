using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using RaidManager.API.Models;

namespace RaidManager.API.Interfaces
{
    public interface IAuthRepository
    {
         Task<User> RegisterUser(User user, string password);

         Task<User> Login(string username, string password);

         Task<bool> UserExists(string username);

         SecurityToken CreateTokenFromClaims(IEnumerable<Claim> claims, string tokenKey, JwtSecurityTokenHandler tokenHandler);
    }
}