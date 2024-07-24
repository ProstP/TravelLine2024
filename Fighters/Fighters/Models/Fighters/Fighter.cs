using System.Text;
using Fighters.Models.Armors;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters.Models.Fighters
{
    public class Fighter : IFighter
    {
        public string Name { get; private set; }
        public IRace Race { get; private set; }
        public IWeapon Weapon { get; private set; }
        public IArmor Armor { get; private set; }
        public int CurrentHelth { get; protected set; }
        public string FighterType { get; protected set; }

        protected int FighterHelth = 0;
        protected int FighterDamage = 0;

        protected Fighter( string name, IRace race, IWeapon weapon, IArmor armor )
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
            CurrentHelth = Math.Max( CurrentHelth - damage, 0 );
        }

        public bool IsAlive()
        {
            return CurrentHelth > 0;
        }

        public override string ToString()
        {
            StringBuilder sb = new( 300 );
            sb.AppendLine( $"{FighterType}" );
            sb.AppendLine( $"   Name: {Name}" );
            sb.AppendLine( $"   Race: {Race.Name}" );
            sb.AppendLine( $"   Weapon: {Weapon.Name}" );
            sb.AppendLine( $"   Armor: {Armor.Name}" );
            sb.AppendLine( $"   Max helth: {GetMaxHealth()}" );
            sb.AppendLine( $"   Helth: {CurrentHelth}" );

            return sb.ToString();
        }

        public void Recover()
        {
            CurrentHelth = GetMaxHealth();
        }
    }
}
