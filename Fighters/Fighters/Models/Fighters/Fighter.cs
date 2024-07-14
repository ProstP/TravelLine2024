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

        public void Print()
        {
            Console.WriteLine( $"{FighterType}" );
            Console.WriteLine( $"Name: {Name}" );
            Console.WriteLine( $"Race: {Race.Name}" );
            Console.WriteLine( $"Weapon: {Weapon.Name}" );
            Console.WriteLine( $"Armor: {Armor.Name}" );
            Console.WriteLine( $"MaxHelth: {GetMaxHealth()}" );
            Console.WriteLine( $"Helth: {CurrentHelth}" );
            Console.WriteLine();
        }

        public void Recover()
        {
            CurrentHelth = GetMaxHealth();
        }
    }
}
