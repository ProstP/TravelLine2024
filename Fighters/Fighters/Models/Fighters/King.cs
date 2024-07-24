using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class King : Fighter
    {
        public King( string name, IRace race ) : base( name, race, new Excalibur(), new IronArmor() )
        {
            FighterType = "King";
            FighterHelth = 30;
            FighterDamage = 15;
            CurrentHelth = GetMaxHealth();
        }
    }
}
