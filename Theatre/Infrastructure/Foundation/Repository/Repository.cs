using Domain.Repositories;

namespace Infrastructure.Foundation.Repository
{
    public class Repository<T> : IRepository<T>
        where T : class
    {
        private readonly TheaterDbContext _dbContext;

        public Repository( TheaterDbContext dbContext )
        {
            _dbContext = dbContext;
        }

        public void Create( T item )
        {
            _dbContext.Set<T>().Add( item );
            _dbContext.SaveChanges();
        }

        public List<T> GetAll()
        {
            return _dbContext.Set<T>().ToList();
        }

        public void Remove( T item )
        {
            _dbContext.Set<T>().Remove( item );
        }
    }
}
