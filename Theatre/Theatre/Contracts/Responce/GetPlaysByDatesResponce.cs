using Domain.Entities;

namespace Theatre.Contracts.Responce
{
    public class GetPlaysByDatesResponce
    {
        public Domain.Entities.Theatre Theatre { get; set; }
        public List<Play> Plays { get; set; } = new();
    }
}
