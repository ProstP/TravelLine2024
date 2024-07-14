namespace Fighters.Models.Races
{
    public class Orc : IRace
    {
        public string Name => "Orc";

        public int Damage => 12;

        public int Health => 30;

        public int Armor => 8;
    }
}
