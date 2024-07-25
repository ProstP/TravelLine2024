namespace Theatre.Contracts.Requests
{
    public class CreateAuthorRequest
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime Birthday { get; set; }
    }
}
