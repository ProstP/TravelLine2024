using Domain.Entities;
using Domain.Repositories;

namespace Infrastructure.Foundation.Repository
{
    public class CompositionRepository : Repository<Composition>, ICompostionRepository
    {
        public CompositionRepository( TheaterDbContext context )
            : base( context )
        {
        }

        public Composition Get( int id )
        {
            return _dbContext.Set<Composition>().FirstOrDefault( c => c.Id == id );
        }

        public List<Composition> GetByAuthorId( int authorId )
        {
            return _dbContext.Set<Composition>().Where( c => c.AuthorId == authorId ).ToList();
        }
    }
}
