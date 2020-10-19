using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RaidManager.API.Data;
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

        public async Task<bool> CharacterExists(Character character)
        {
            return await _context.Characters.AnyAsync(x => x.Name.Equals(character.Name) && x.Realm.Equals(character.Realm) && x.Region.Equals(character.Region));
        }
    }
}