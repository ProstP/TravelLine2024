using Domain.Entities;
using Domain.Repositories;

namespace Infrastructure.Foundation.Repository
{
    public class WorkingHoursRepository : Repository<WorkingHours>, IWorkingHoursRepository
    {
        public WorkingHoursRepository( TheaterDbContext context )
            : base( context )
        {
        }

        public WorkingHours Get( int id )
        {
            return _dbContext.Set<WorkingHours>().FirstOrDefault( wh => wh.Id == id );
        }

        public List<WorkingHours> GetByTheatreId( int theatreId )
        {
            return _dbContext.Set<WorkingHours>().Where( wh => wh.TheatreId == theatreId ).ToList();
        }
    }
}
