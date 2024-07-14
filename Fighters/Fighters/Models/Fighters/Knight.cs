using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Knight : Fighter
    {
        public Knight( string name, IRace race, IWeapon weapon, IArmor armor ) : base( name, race, weapon, armor )
        {
            FighterType = "Knight";
            FighterHelth = 20;
            FighterDamage = 8;
            CurrentHelth = GetMaxHealth();
        }
    }
}
