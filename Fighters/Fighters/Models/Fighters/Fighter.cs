using Fighters.Models.Armors;
using Fighters.Models.FighterType;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Fighter : IFighter
    {
        public string Name { get; private set; }
        public IFighterType FighterType { get; private set; }
        public IRace Race { get; private set; }
        public IWeapon Weapon { get; private set; }
        public IArmor Armor { get; private set; }
        public int CurrentHelth { get; private set; }

        public Fighter(
            string name,
            IFighterType fighterType,
            IRace race,
            IWeapon weapon,
            IArmor armor )
        {
            Name = name;
            FighterType = fighterType;
            Race = race;
            Weapon = weapon;
            Armor = armor;
            CurrentHelth = GetMaxHealth();
        }

        public int CalculateDamage()
        {
            return Race.Damage + FighterType.Damage + Weapon.Damage;
        }

        public int GetMaxHealth()
        {
            return Race.Health + FighterType.Health;
        }

        public int CalculateArmor()
        {
            return Race.Armor + Armor.Armor;
        }

        public void TakeDamage( int damage )
        {
            int newHelth = CurrentHelth - Math.Max( damage - CalculateArmor(), 0 );

            if ( newHelth >= CurrentHelth )
            {
                CurrentHelth = 0;
            }
            else
            {
                CurrentHelth = newHelth;
            }
        }
    }
}
