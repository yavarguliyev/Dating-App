using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Repositories.Interfaces
{
  public interface IAuthRepository
  {
    Task<User> Login(string username, string password);
    Task<User> Register(User user, string password);
    Task<bool> UserExists(string username);
  }
}