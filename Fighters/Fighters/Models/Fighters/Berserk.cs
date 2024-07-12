using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Berserk : IFighter
    {
        public string Name { get; private set; }

        public IRace Race { get; private set; }

        public IWeapon Weapon { get; private set; }

        public IArmor Armor { get; } = new NoArmor();

        public int CurrentHelth { get; private set; }
        const int FighterHelth = 20;
        const int FighterDamage = 12;

        Berserk( string name, IRace race, IWeapon weapon )
        {
            Name = name;
            Race = race;
            Weapon = weapon;
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
