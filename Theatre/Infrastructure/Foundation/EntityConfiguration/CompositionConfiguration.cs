using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Foundation.EntityConfiguration
{
    public class CompositionConfiguration : IEntityTypeConfiguration<Composition>
    {
        public void Configure( EntityTypeBuilder<Composition> builder )
        {
            builder.ToTable( nameof( Composition ) )
                .HasKey( c => c.Id );

            builder.Property( c => c.Name )
                .HasMaxLength( 50 )
                .IsRequired();

            builder.Property( c => c.ShortDescription )
                .HasMaxLength( 350 )
                .IsRequired();

            builder.Property( c => c.CharactersInfo )
                .HasMaxLength( 350 )
                .IsRequired();

            builder.HasMany( c => c.Plays )
                .WithOne()
                .HasForeignKey( p => p.CompositionId );
        }
    }
}
