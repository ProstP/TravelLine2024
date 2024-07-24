namespace Fighters.Models.Races
{
    public class Human : IRace
    {
        public int Damage => 8;

        public int Health => 24;

        public int Armor => 8;

        public string Name => "Human";
    }
}
