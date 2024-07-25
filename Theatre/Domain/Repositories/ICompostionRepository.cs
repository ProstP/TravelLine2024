using Domain.Entities;

namespace Domain.Repositories
{
    public interface ICompostionRepository : IRepository<Composition>
    {
        Composition Get( int id );

        List<Composition> GetByAuthorId( int authorId );
    }
}
