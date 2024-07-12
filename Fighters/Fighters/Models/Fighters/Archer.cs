using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Archer : IFighter
    {
        public string Name { get; private set; }

        public IRace Race { get; private set; }

        public IWeapon Weapon { get; } = new Bow();

        public IArmor Armor { get; } = new LeatherArmor();

        public int CurrentHelth { get; private set; }
        const int FighterHelth = 5;
        const int FighterDamage = 15;

        Archer( string name, IRace race )
        {
            Name = name;
            Race = race;
        }

        public int CalculateArmor()
        {
            return Race.Armor + Armor.Armor;
        }

        public int CalculateDamage()
        {
            return Race.Damage + Weapon.Damage + FighterDamage;
        }

        public int GetMaxHealth()
        {
            return Race.Health + FighterHelth;
        }

        public void TakeDamage( int damage )
        {
            CurrentHelth = Math.Max( CurrentHelth - Math.Max( damage - CalculateArmor(), 0 ), 0 );
        }

        public bool IsAlive()
        {
            return CurrentHelth > 0;
        }
    }
}
