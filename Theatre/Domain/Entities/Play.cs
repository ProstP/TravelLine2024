namespace Domain.Entities
{
    public class Play
    {
        public int Id { get; private init; }
        public string Name { get; private init; }
        public DateTime StartTime { get; private init; }
        public DateTime EndTime { get; private init; }
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
            Name = name;
            StartTime = startTime;
            EndTime = endTime;
            TicketPrice = ticketPrice;
            Description = description;
            TheatreId = theatreId;
            CompositionId = compositionId;
        }
    }
}
