using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Mappings
{
  public class AutoMapperProfiles : Profile
  {
    public AutoMapperProfiles()
    {
      CreateMap<User, UserForListDto>();
      CreateMap<User, UserForDetailedDto>();
      CreateMap<UserForRegisterDto, User>();
    }
  }
}