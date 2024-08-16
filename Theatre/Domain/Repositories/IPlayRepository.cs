using Domain.Entities;

namespace Domain.Repositories
{
    public interface IPlayRepository : IRepository<Play>
    {
        Play Get( int id );

        List<Play> GetByTheatreId( int theatreId );

        List<Play> GetByCompositionId( int compositionId );

        List<Play> GetPlaysByDates( DateTime startTime, DateTime endTime );
    }
}
