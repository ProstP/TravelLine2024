using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Play
    {
        public int Id { get; private init; }
        public string Name { get; private init; }
        public DateTime StartTime { get; private init; }
        public DateTime EndTime { get; private init; }
        [Column( TypeName = "money" )]
        public decimal TicketPrice { get; private init; }
        public string Description { get; private init; }

        public int TheatreId { get; private init; }
        public int CompositionId { get; private init; }

        public Play(
            string name,
            DateTime startTime,
            DateTime endTime,
            decimal ticketPrice,
            string description,
            int theatreId,
            int compositionId )
        {
            if ( String.IsNullOrWhiteSpace( name ) )
            {
                throw new ArgumentException( $"{nameof( name )} can't be null or whitespace." );
            }
            Name = name;

            if ( ticketPrice < 0 )
            {
                throw new ArgumentException( $"{nameof( ticketPrice )} can't be negative." );
            }
            TicketPrice = ticketPrice;

            if ( String.IsNullOrWhiteSpace( description ) )
            {
                throw new ArgumentException( $"{nameof( description )} can't be null or whitespace." );
            }
            Description = description;

            StartTime = startTime;
            EndTime = endTime;
            TheatreId = theatreId;
            CompositionId = compositionId;
        }
    }
}
