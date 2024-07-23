namespace Domain.Entities
{
    public class Composition
    {
        public int Id { get; private init; }
        public string Name { get; private init; }
        public string ShortDescription { get; private init; }
        public string CharactersInfo { get; private init; }

        public int AuthorId { get; private init; }

        public List<Play> Plays { get; private init; } = new();

        public Composition(
            string name,
            string shortDescription,
            string charactersInfo,
            int authorId )
        {
            if ( String.IsNullOrWhiteSpace( name ) )
            {
                throw new ArgumentException( $"{nameof( name )} can't be null or whitespace." );
            }
            Name = name;
            if ( String.IsNullOrWhiteSpace( shortDescription ) )
            {
                throw new ArgumentException( $"{nameof( shortDescription )} can't be null or whitespace." );
            }
            ShortDescription = shortDescription;
            if ( String.IsNullOrWhiteSpace( charactersInfo ) )
            {
                throw new ArgumentException( $"{nameof( charactersInfo )} can't be null or whitespace." );
            }
            CharactersInfo = charactersInfo;
            AuthorId = authorId;
        }
    }
}
