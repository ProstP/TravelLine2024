namespace Theatre.Contracts.Requests
{
    public class CreateTheatreRequest
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime OpeningDate { get; set; }
        public string Description { get; set; }
        public string PhoneNumber { get; set; }
    }
}
