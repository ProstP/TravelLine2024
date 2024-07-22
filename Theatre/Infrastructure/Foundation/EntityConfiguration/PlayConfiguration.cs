using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Foundation.EntityConfiguration
{
    public class PlayConfiguration : IEntityTypeConfiguration<Play>
    {
        public void Configure( EntityTypeBuilder<Play> builder )
        {
            builder.ToTable( nameof( Play ) )
                .HasKey( p => p.Id );

            builder.Property( p => p.Name )
                .HasMaxLength( 50 )
                .IsRequired();

            builder.Property( p => p.StartTime )
                .IsRequired();

            builder.Property( p => p.EndTime )
                .IsRequired();

            builder.Property( p => p.TicketPrice )
                .IsRequired();

            builder.Property( p => p.Description )
                .HasMaxLength( 350 )
                .IsRequired();
        }
    }
}
