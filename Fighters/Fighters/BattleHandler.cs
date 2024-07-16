using Fighters.Models.Armors;
using Fighters.Models.Fighters;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters
{
    public static class BattleHandler
    {
        readonly static Random _random = new Random();

        public static IFighter Battle(
            IFighter first,
            IFighter second,
            bool isDamageRandomEnabled = false,
            bool isCriticalDamageEnabled = false )
        {
            while ( first.IsAlive() && second.IsAlive() )
            {
                int firstDamage = first.CalculateDamage();
                int secondDamage = second.CalculateDamage();

                if ( isDamageRandomEnabled )
                {
                    firstDamage += ( int )( firstDamage * CalculateDamageModifier() );
                    secondDamage += ( int )( secondDamage * CalculateDamageModifier() );
                }
                if ( isCriticalDamageEnabled )
                {
                    firstDamage = IsCriticalDamage() ? firstDamage * 2 : firstDamage;
                    secondDamage = IsCriticalDamage() ? secondDamage * 2 : secondDamage;
                }

                firstDamage = Math.Max( firstDamage - second.CalculateArmor(), 1 );
                secondDamage = Math.Max( secondDamage - first.CalculateArmor(), 1 );

                Console.WriteLine( $"{first.Name} deals {firstDamage}" );
                second.TakeDamage( firstDamage );
                Console.WriteLine( $"{second.Name} helth: {second.CurrentHelth}" );
                Console.WriteLine( $"{second.Name} deals {secondDamage}" );
                first.TakeDamage( secondDamage );
                Console.WriteLine( $"{first.Name} helth: {first.CurrentHelth}" );
                Console.WriteLine();
            }

            if ( !second.IsAlive() )
            {
                return first;
            }
            else
            {
                return second;
            }
        }

        private static double CalculateDamageModifier()
        {
            return _random.NextDouble() * 0.5 - 0.2;
        }

        private static bool IsCriticalDamage()
        {
            return _random.NextDouble() > 0.1;
        }
    }
}
