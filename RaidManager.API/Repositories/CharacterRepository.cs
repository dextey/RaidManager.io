using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RaidManager.API.Data;
using RaidManager.API.DataTransferObjects;
using RaidManager.API.Interfaces;
using RaidManager.API.Models;

namespace RaidManager.API.Repositories
{
    public class CharacterRepository : ICharacterRepository
    {
        private readonly DataContext _context;

        public CharacterRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Character> Add(Character character)
        {
            await _context.Characters.AddAsync(character);
            await _context.SaveChangesAsync();
            return character;
        }

        public async Task<bool> CharacterExists(CharacterToAddDTO character)
        {
            return await _context.Characters.AnyAsync(x => x.Name.Equals(character.Name) && x.Realm.Equals(character.Realm) && x.Region.Equals(character.Region));
        }
    }
}