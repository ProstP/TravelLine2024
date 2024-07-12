using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class King : IFighter
    {
        public string Name { get; private set; }

        public IRace Race { get; private set; }

        public IWeapon Weapon { get; } = new Excalibur();

        public IArmor Armor { get; } = new IronArmor();

        public int CurrentHelth { get; private set; }
        const int FighterHelth = 15;
        const int FighterDamage = 15;

        King( string name, IRace race )
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
