using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Foundation.EntityConfiguration
{
    public class WorkingHoursConfiguration : IEntityTypeConfiguration<WorkingHours>
    {
        public void Configure( EntityTypeBuilder<WorkingHours> builder )
        {
            builder.ToTable( nameof( WorkingHours ) )
                .HasKey( wh => wh.Id );

            builder.Property( wh => wh.OpeningTime )
                .IsRequired();

            builder.Property( wh => wh.ClosingTime )
                .IsRequired();

            builder.Property( wh => wh.ValidFrom )
                .IsRequired();

            builder.Property( wh => wh.ValidUntil )
                .IsRequired();
        }
    }
}
