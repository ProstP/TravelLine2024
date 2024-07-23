using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class WorkingHours
    {
        public int Id { get; private init; }
        public TimeOnly OpeningTime { get; private init; }
        public TimeOnly ClosingTime { get; private init; }
        // следующие 2 параметра обозначают с какого дня недели по какой данный режим работы действует
        // Например From = 1, а until = 5, получается с понедельника до пятницы, включительно
        // From 6, until = 0 - выходные суббота и воскресенье
        [Column( TypeName = "tinyint" )]
        public byte ValidFrom { get; private init; }
        [Column( TypeName = "tinyint" )]
        public byte ValidUntil { get; private init; }

        public int TheaterId { get; private init; }

        public WorkingHours(
            TimeOnly openingTime,
            TimeOnly closingTime,
            byte validFrom,
            byte validUntil,
            int theatreId )
        {
            OpeningTime = openingTime;
            ClosingTime = closingTime;
            if ( validFrom < 0 || validFrom > 6 )
            {
                throw new ArgumentException( $"{nameof( validFrom )} must be between 0 and 6." );
            }
            ValidFrom = validFrom;
            if ( validUntil < 0 || validUntil > 6 )
            {
                throw new ArgumentException( $"{nameof( validUntil )} must be between 0 and 6." );
            }
            ValidUntil = validUntil;
            TheaterId = theatreId;
        }
    }
}
