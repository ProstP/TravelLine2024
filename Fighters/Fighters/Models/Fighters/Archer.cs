using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Archer : Fighter
    {
        public Archer( string name, IRace race, IArmor armor ) : base( name, race, new Bow(), armor )
        {
            FighterType = "Archer";
            FighterHelth = 15;
            FighterDamage = 15;
            CurrentHelth = GetMaxHealth();
        }
    }
}
