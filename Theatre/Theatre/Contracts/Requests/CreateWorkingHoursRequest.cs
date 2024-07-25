namespace Theatre.Contracts.Requests
{
    public class CreateWorkingHoursRequest
    {
        public byte OpeningHours { get; set; }
        public byte OpeningMunite { get; set; }
        public byte ClosingHours { get; set; }
        public byte ClosingMunite { get; set; }
        public byte ValidFrom { get; set; }
        public byte ValidUntil { get; set; }
        public int TheatreId { get; set; }
    }
}
