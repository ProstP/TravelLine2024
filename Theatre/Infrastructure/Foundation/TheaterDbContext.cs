using Infrastructure.Foundation.EntityConfiguration;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Foundation;
public class TheaterDbContext : DbContext
{
    public TheaterDbContext( DbContextOptions<TheaterDbContext> options )
        : base( options )
    {
    }

    protected override void OnModelCreating( ModelBuilder modelBuilder )
    {
        base.OnModelCreating( modelBuilder );

        modelBuilder.ApplyConfiguration( new AuthorConfiguration() );
        modelBuilder.ApplyConfiguration( new CompositionConfiguration() );
        modelBuilder.ApplyConfiguration( new PlayConfiguration() );
        modelBuilder.ApplyConfiguration( new TheaterConfiguration() );
        modelBuilder.ApplyConfiguration( new WorkingHoursConfiguration() );

    }
}
