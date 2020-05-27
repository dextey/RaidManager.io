using System;
using System.Linq;
using System.Threading.Tasks;
using DatingV2.API.Data;
using Microsoft.EntityFrameworkCore;
using RaidManager.API.Interfaces;
using RaidManager.API.Models;

namespace RaidManager.API.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<User> RegisterUser(User user, string password)
        {
            byte[] _passwordHash, _passwordSalt;

            CreatePasswordHash(password, out _passwordHash, out _passwordSalt);

            user.PasswordHash = _passwordHash;
            user.PasswordSalt = _passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] _passwordHash, out byte[] _passwordSalt)
        {
            using(var hmacCode = new System.Security.Cryptography.HMACSHA512()) 
            {
                _passwordSalt = hmacCode.Key;
                _passwordHash = hmacCode.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
            
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Username.Equals(username));

            if(user == null) 
            {
                return null;
            }

            if(!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }

            return user;
        }

        private bool VerifyPasswordHash(string password, byte[] _passwordHash, byte[] _passwordSalt)
        {    
            using(var hmacCode = new System.Security.Cryptography.HMACSHA512(_passwordSalt)) 
            {
                var computedHash = hmacCode.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(_passwordHash);
            }
        }

        public async Task<bool> UserExists(string _username)
        {
            return await _context.Users.AnyAsync(x => x.Username.Equals(_username));
        }
    }
}