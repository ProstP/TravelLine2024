using Domain.Entities;
using Domain.Repositories;

namespace Infrastructure.Foundation.Repository
{
    public class TheatreRepository : Repository<Theatre>, ITheatreRepository
    {
        public TheatreRepository( TheaterDbContext context )
            : base( context )
        {
        }

        public Theatre Get( int id )
        {
            return _dbContext.Set<Theatre>().FirstOrDefault( t => t.Id == id );
        }

        public Theatre Update( int id, Theatre theatre )
        {
            var oldTheatre = _dbContext.Set<Theatre>().FirstOrDefault( t => t.Id == id );
            if ( theatre == null )
            {
                return null;
            }
            _dbContext.Update( theatre );
            _dbContext.SaveChanges();

            return theatre;
        }
    }
}
