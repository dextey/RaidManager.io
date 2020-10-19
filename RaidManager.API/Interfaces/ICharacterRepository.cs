using System.Threading.Tasks;
using RaidManager.API.Models;

namespace RaidManager.API.Interfaces
{
    public interface ICharacterRepository
    {
         Task<bool> CharacterExists(Character character);
    }
}