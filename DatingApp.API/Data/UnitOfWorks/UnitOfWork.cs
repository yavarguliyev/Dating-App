using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data.Repositories.Interfaces;

namespace DatingApp.API.Data.UnitOfWorks
{
  public class UnitOfWork : IUnitOfWork
  {
    private readonly IMapper _mapper;
    private readonly DataContext _context;
    public UnitOfWork(DataContext context, IMapper mapper)
    {
      _context = context;
      _mapper = mapper;
    }

    public IUserRepository UserRepository => throw new System.NotImplementedException();

    public IMessageRepository MessageRepository => throw new System.NotImplementedException();

    public ILikesRepository LikesRepository => throw new System.NotImplementedException();

    public Task<bool> Complete()
    {
      throw new System.NotImplementedException();
    }

    public bool HasChanges()
    {
      throw new System.NotImplementedException();
    }
  }
}