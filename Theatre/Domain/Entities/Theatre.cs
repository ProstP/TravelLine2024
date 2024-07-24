namespace Domain.Entities;
public class Theatre
{
    public int Id { get; private init; }
    public string Name { get; private set; }
    public string Address { get; private init; }
    public DateTime OpeningDate { get; private init; }
    public string Description { get; private set; }
    public string PhoneNumber { get; private set; }

    private List<WorkingHours> _workingHours = new();
    public IReadOnlyList<WorkingHours> WorkingHours
    {
        get
        {
            return _workingHours;
        }
    }

    public List<Play> Plays { get; private set; } = new();

    public Theatre(
        string name,
        string address,
        DateTime openingDate,
        string description,
        string phoneNumber )
    {
        if ( String.IsNullOrWhiteSpace( name ) )
        {
            throw new ArgumentException( $"{nameof( name )} can't be null or whitespace." );
        }
        Name = name;
        if ( String.IsNullOrWhiteSpace( address ) )
        {
            throw new ArgumentException( $"{nameof( address )} can't be null or whitespace." );
        }
        Address = address;
        OpeningDate = openingDate;
        if ( String.IsNullOrWhiteSpace( description ) )
        {
            throw new ArgumentException( $"{nameof( description )} can't be null or whitespace." );
        }
        Description = description;
        if ( String.IsNullOrWhiteSpace( phoneNumber ) )
        {
            throw new ArgumentException( $"{nameof( phoneNumber )} can't be null or whitespace." );
        }
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

    public void AddNewWorkingHours( WorkingHours workingHours )
    {
        byte newValidFrom = workingHours.ValidFrom;
        byte newValidUntil = workingHours.ValidUntil;
        if ( newValidFrom > newValidUntil )
        {
            newValidUntil += 7;
        }

        foreach ( var wh in _workingHours )
        {
            byte validFrom = wh.ValidFrom;
            byte validUntil = wh.ValidUntil;

            if ( validFrom > validUntil )
            {
                validUntil += 7;
            }

            if ( newValidUntil > 6 && validUntil < newValidFrom )
            {
                validFrom += 7;
                validUntil += 7;
            }
            if ( validUntil > 6 && newValidUntil < validFrom )
            {
                newValidFrom += 7;
                newValidUntil += 7;
            }

            if ( validFrom <= newValidFrom && newValidFrom <= validUntil
                || validFrom <= newValidUntil && newValidUntil <= validUntil
                || newValidFrom <= validFrom && validFrom <= newValidUntil
                || newValidFrom <= validUntil && validUntil <= newValidUntil )
            {
                throw new ArgumentException( "Workinh hours can't overlap" );
            }
        }

        _workingHours.Add( workingHours );
    }

    public void RemoveWorkingHours( WorkingHours workingHours )
    {
        _workingHours.Remove( workingHours );
    }
}
