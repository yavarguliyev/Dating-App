using System.Linq;
using AutoMapper;
using DatingApp.api.DTOs;
using DatingApp.api.Entities;
using DatingApp.api.Extensions;

namespace DatingApp.api.Mappings
{
  public class MapperProfiles : Profile
  {
    public MapperProfiles()
    {
      CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src =>
                    src.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
      CreateMap<Photo, PhotoDto>();
      CreateMap<MemberUpdateDto, AppUser>();
      CreateMap<RegisterDto, AppUser>();
      CreateMap<Message, MessageDto>()
          .ForMember(dest => dest.SenderPhotoUrl, opt => opt.MapFrom(src =>
              src.Sender.Photos.FirstOrDefault(x => x.IsMain).Url))
          .ForMember(dest => dest.RecipientPhotoUrl, opt => opt.MapFrom(src =>
              src.Recipient.Photos.FirstOrDefault(x => x.IsMain).Url));
    }
  }
}