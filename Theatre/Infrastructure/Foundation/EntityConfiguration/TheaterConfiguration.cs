using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Foundation.EntityConfiguration
{
    public class TheaterConfiguration : IEntityTypeConfiguration<Theatre>
    {
        public void Configure( EntityTypeBuilder<Theatre> builder )
        {
            builder.ToTable( nameof( Theatre ) )
                .HasKey( t => t.Id );

            builder.Property( t => t.Name )
                .HasMaxLength( 30 )
                .IsRequired();

            builder.Property( t => t.Address )
                .HasMaxLength( 50 )
                .IsRequired();

            builder.Property( t => t.OpeningDate )
                .IsRequired();

            builder.Property( t => t.Description )
                .HasMaxLength( 300 )
                .IsRequired();

            builder.Property( t => t.PhoneNumber )
                .HasMaxLength( 20 )
                .IsRequired();

            builder.HasMany( t => t.WorkingHours )
                .WithOne()
                .HasForeignKey( wh => wh.TheaterId );

            builder.HasMany( t => t.Plays )
                .WithOne()
                .HasForeignKey( p => p.TheatreId );
        }
    }
}
