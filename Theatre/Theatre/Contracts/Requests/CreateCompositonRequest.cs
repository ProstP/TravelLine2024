namespace Theatre.Contracts.Requests
{
    public class CreateCompositonRequest
    {
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string CharactersInfo { get; set; }

        public int AuthorId { get; set; }
    }
}
