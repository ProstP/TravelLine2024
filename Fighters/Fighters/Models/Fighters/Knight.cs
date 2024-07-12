using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Knight : IFighter
    {
        public string Name { get; private set; }

        public IRace Race { get; private set; }

        public IWeapon Weapon { get; private set; }

        public IArmor Armor { get; private set; }

        public int CurrentHelth { get; private set; }
        const int FighterHelth = 8;
        const int FighterDamage = 10;

        Knight( string name, IRace race, IWeapon weapon, IArmor armor )
        {
            Name = name;
            Race = race;
            Weapon = weapon;
            Armor = armor;
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
