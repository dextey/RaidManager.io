using System.Threading.Tasks;
using RaidManager.API.DataTransferObjects;
using RaidManager.API.Models;

namespace RaidManager.API.Interfaces
{
    public interface ICharacterRepository
    {
         Task<bool> CharacterExists(CharacterToAddDTO character);

         Task<Character> Add(Character character);
    }
}