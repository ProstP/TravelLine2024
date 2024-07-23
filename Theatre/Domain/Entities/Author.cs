namespace Domain.Entities
{
    public class Author
    {
        public int Id { get; private init; }
        public string Name { get; private init; }
        public string Surname { get; private init; }
        public DateTime Birthday { get; private init; }

        public List<Composition> Compositions { get; private init; } = new();

        public Author(
            string name,
            string surname,
            DateTime birthday )
        {
            if ( String.IsNullOrWhiteSpace( name ) )
            {
                throw new ArgumentException( $"{nameof( name )} can't be null or whitespace." );
            }
            Name = name;
            if ( String.IsNullOrWhiteSpace( surname ) )
            {
                throw new ArgumentException( $"{nameof( surname )} can't be null or whitespace." );
            }
            Surname = surname;
            Birthday = birthday;
        }
    }
}
