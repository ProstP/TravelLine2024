using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public interface IFighter
    {
        string Name { get; }
        IRace Race { get; }
        IWeapon Weapon { get; }
        IArmor Armor { get; }
        int CurrentHelth { get; }

        public int GetMaxHealth();
        public int CalculateDamage();
        public int CalculateArmor();

        public void TakeDamage( int damage );
        public bool IsAlive();
    }
}
