namespace Domain.Entities;
public class Theatre
{
    public int Id { get; private init; }
    public string Name { get; private set; }
    public string Address { get; private init; }
    public DateTime OpeningDate { get; private init; }
    public string Description { get; private set; }
    public string PhoneNumber { get; private set; }

    public List<WorkingHours> WorkingHours { get; private set; } = new();

    public List<Play> Plays { get; private set; } = new();

    public Theatre(
        string name,
        string address,
        DateTime openingDate,
        string description,
        string phoneNumber )
    {
        Name = name;
        Address = address;
        OpeningDate = openingDate;
        Description = description;
        PhoneNumber = phoneNumber;
    }

    public void Update(
        string name,
        string description,
        string phoneNumber )
    {
        if ( !String.IsNullOrWhiteSpace( name ) )
        {
            Name = name;
        }
        if ( !String.IsNullOrWhiteSpace( description ) )
        {
            Description = description;
        }
        if ( !String.IsNullOrWhiteSpace( phoneNumber ) )
        {
            PhoneNumber = phoneNumber;
        }
    }
}
