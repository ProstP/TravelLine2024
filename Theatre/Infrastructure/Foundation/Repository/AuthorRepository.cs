using Domain.Entities;
using Domain.Repositories;

namespace Infrastructure.Foundation.Repository
{
    public class AuthorRepository : Repository<Author>, IAuthorRepository
    {
        public AuthorRepository( TheaterDbContext context )
            : base( context )
        {
        }

        public Author Get( int id )
        {
            return _dbContext.Set<Author>().FirstOrDefault( a => a.Id == id );
        }
    }
}
