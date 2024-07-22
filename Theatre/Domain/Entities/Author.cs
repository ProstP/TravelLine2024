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
            Name = name;
            Surname = surname;
            Birthday = birthday;
        }
    }
}
