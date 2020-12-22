using System.Threading.Tasks;
using DatingApp.API.Data.Repositories.Interfaces;

namespace DatingApp.API.Data.UnitOfWorks
{
  public interface IUnitOfWork
  {
    IUserRepository UserRepository { get; }
    IMessageRepository MessageRepository { get; }
    ILikesRepository LikesRepository { get; }
    Task<bool> Complete();
    bool HasChanges();
  }
}