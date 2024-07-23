using Infrastructure.Foundation.EntityConfiguration;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Foundation;
public class TheaterDbContext : DbContext
{
    /*
    public TheaterDbContext( DbContextOptions<TheaterDbContext> options )
        : base( options )
    {
    }
    */

    protected override void OnConfiguring( DbContextOptionsBuilder optionsBuilder )
    {
        base.OnConfiguring( optionsBuilder );

        optionsBuilder.UseSqlServer( "Server=LAPTOP-U0R8E398\\SQLEXPRESS;Database=Theatre;Trusted_Connection=True;TrustServerCertificate=True;" );
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
