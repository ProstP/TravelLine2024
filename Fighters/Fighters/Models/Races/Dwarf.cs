namespace Fighters.Models.Races
{
    public class Dwarf : IRace
    {
        public string Name => "Dwarf";

        public int Damage => 8;

        public int Health => 15;

        public int Armor => 12;
    }
}
