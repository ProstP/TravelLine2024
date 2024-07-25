namespace Theatre.Contracts.Requests
{
    public class CreatePlayRequest
    {
        public string Name { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public decimal TicketPrice { get; set; }
        public string Description { get; set; }
        public int TheatreId { get; set; }
        public int CompositionId { get; set; }
    }
}
