using System.Threading.Tasks;
using DatingApp.api.DTOs;
using DatingApp.api.Entities;
using DatingApp.api.Helpers;

namespace DatingApp.api.Data.Repositories.Interfaces
{
  public interface ILikesRepository
  {
    Task<UserLike> GetUserLike(int sourceUserId, int likedUserId);
    Task<AppUser> GetUserWithLikes(int userId);
    Task<PagedList<LikeDto>> GetUserLikes(LikesParams likesParams);
  }
}