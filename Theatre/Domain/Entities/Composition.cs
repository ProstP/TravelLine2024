namespace Domain.Entities
{
    public class Composition
    {
        public int Id { get; private init; }
        public string Name { get; private init; }
        public string ShortDescription { get; private init; }
        public string CharactersInfo { get; private init; }

        public int AuthorId { get; private init; }

        public Composition(
            string name,
            string shortDescription,
            string charactersInfo,
            int authorId )
        {
            Name = name;
            ShortDescription = shortDescription;
            CharactersInfo = charactersInfo;
            AuthorId = authorId;
        }
    }
}
