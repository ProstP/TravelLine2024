namespace Fighters.Models.Races
{
    public class Elf : IRace
    {
        public string Name => "Elf";

        public int Damage => 12;

        public int Health => 15;

        public int Armor => 5;
    }
}
