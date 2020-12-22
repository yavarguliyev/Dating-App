using System;
using System.Threading.Tasks;
using DatingApp.API.Data.UnitOfWorks;
using DatingApp.API.Extensions;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace DatingApp.API.Helpers
{
  public class LogUserActivity : IAsyncActionFilter
  {
    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
      var resultContext = await next();

      if (!resultContext.HttpContext.User.Identity.IsAuthenticated) return;

      var userId = resultContext.HttpContext.User.GetUserId();
      var uow = resultContext.HttpContext.RequestServices.GetService<IUnitOfWork>();
      var user = await uow.UserRepository.GetUserByIdAsync(userId);
      user.LastActive = DateTime.UtcNow;
      await uow.Complete();
    }
  }
}