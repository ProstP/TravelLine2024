using Domain.Entities;

namespace Domain.Repositories
{
    public interface ITheatreRepository : IRepository<Theatre>
    {
        Theatre Get( int id );

        Theatre Update( int id, Theatre theatre );
    }
}
