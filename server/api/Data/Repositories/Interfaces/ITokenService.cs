using System.Threading.Tasks;
using DatingApp.api.Entities;

namespace DatingApp.api.Data.Repositories.Interfaces
{
  public interface ITokenService
  {
    Task<string> CreateToken(AppUser user);
  }
}