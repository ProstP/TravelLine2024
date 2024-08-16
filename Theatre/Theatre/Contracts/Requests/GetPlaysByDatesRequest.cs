namespace Theatre.Contracts.Requests
{
    public class GetPlaysByDatesRequest
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}
