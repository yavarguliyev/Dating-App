using DatingApp.api.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers.v1
{
  [ServiceFilter(typeof(LogUserActivity))]
  [ApiController]
  [ApiVersion("1.0")]
  [Route("api/v1/[controller]")]
  public class BaseApiController : ControllerBase
  {
  }
}