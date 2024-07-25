using Domain.Entities;

namespace Domain.Repositories
{
    public interface IWorkingHoursRepository : IRepository<WorkingHours>
    {
        WorkingHours Get( int id );

        List<WorkingHours> GetByTheatreId( int theatreId );
    }
}
