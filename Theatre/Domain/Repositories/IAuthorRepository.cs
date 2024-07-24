using Domain.Entities;

namespace Domain.Repositories
{
    public interface IAuthorRepository : IRepository<Author>
    {
        Author Get( int id );
    }
}
