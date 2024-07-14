using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Berserk : Fighter
    {
        public Berserk( string name, IRace race, IWeapon weapon ) : base( name, race, weapon, new NoArmor() )
        {
            FighterType = "Berserk";
            FighterHelth = 45;
            FighterDamage = 12;
            CurrentHelth = GetMaxHealth();
        }
    }
}
