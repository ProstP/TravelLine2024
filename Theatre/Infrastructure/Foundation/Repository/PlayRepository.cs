using Domain.Entities;
using Domain.Repositories;

namespace Infrastructure.Foundation.Repository
{
    public class PlayRepository : Repository<Play>, IPlayRepository
    {
        public PlayRepository( TheaterDbContext context )
            : base( context )
        {
        }

        public Play Get( int id )
        {
            return _dbContext.Set<Play>().FirstOrDefault( p => p.Id == id );
        }

        public List<Play> GetByCompositionId( int compositionId )
        {
            return _dbContext.Set<Play>().Where( p => p.CompositionId == compositionId ).ToList();
        }

        public List<Play> GetByTheatreId( int theatreId )
        {
            return _dbContext.Set<Play>().Where( p => p.TheatreId == theatreId ).ToList();
        }

        public List<Play> GetPlaysByDates( DateTime startTime, DateTime endTime )
        {
            return _dbContext.Set<Play>().Where( p => startTime <= p.StartTime && p.EndTime <= endTime ).ToList();
        }
    }
}
