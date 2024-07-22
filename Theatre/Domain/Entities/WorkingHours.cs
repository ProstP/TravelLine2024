using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class WorkingHours
    {
        public int Id { get; private init; }
        public TimeOnly OpeningTime { get; private init; }
        public TimeOnly ClosingTime { get; private init; }
        // следующие 2 параметра обозначают с какого дня недели по какой данный режим работы действует
        // Например From = 0, а until = 4, получается с понедельника до пятницы, включительно
        [Column( TypeName = "tinyint(6)" )]
        public byte ValidFrom { get; private init; }
        [Column( TypeName = "tinyint(6)" )]
        public byte ValidUntil { get; private init; }

        public int TheaterId { get; private init; }

        public WorkingHours(
            TimeOnly openingTime,
            TimeOnly closingTime,
            byte validFrom,
            byte validUntil )
        {
            OpeningTime = openingTime;
            ClosingTime = closingTime;
            ValidFrom = validFrom;
            ValidUntil = validUntil;
        }
    }
}
