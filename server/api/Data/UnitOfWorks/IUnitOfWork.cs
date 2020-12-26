using System.Threading.Tasks;
using DatingApp.api.Data.Repositories.Interfaces;

namespace DatingApp.api.Data.UnitOfWorks
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