using Fighters.Models.Armors;
using Fighters.Models.Fighters;
using Fighters.Models.Races;
using Fighters.Models.Weapons;

namespace Fighters
{
    public static class FightersCreator
    {
        public static IFighter CreateNewFighter()
        {
            PrintFighterTypes();
            Console.Write( "Enter type: " );

            while ( true )
            {
                string userInput = Console.ReadLine();
                Console.WriteLine();
                switch ( userInput )
                {
                    case "Knight":
                        return CreateKnight();
                    case "Archer":
                        return CreateArcher();
                    case "Berserk":
                        return CreateBerserk();
                    case "King":
                        return CreateKing();
                    default:
                        Console.Write( "Unknown fighter type. Please enter again: " );
                        break;
                }
            }
        }

        private static void PrintFighterTypes()
        {
            Console.WriteLine( "Fighters:" );
            Console.WriteLine( "Knight" );
            Console.WriteLine( "Archer (with Bow)" );
            Console.WriteLine( "Berserk (without armor)" );
            Console.WriteLine( "King (with Excalibur and iron armor)" );
            Console.WriteLine();
        }

        private static Knight CreateKnight()
        {
            string name = ReadNameFromInput();
            var race = CreateRace();
            var weapon = CreateWeapon();
            var armor = CreateArmor();

            return new Knight( name, race, weapon, armor );
        }
        private static Archer CreateArcher()
        {
            string name = ReadNameFromInput();
            var race = CreateRace();
            var armor = CreateArmor();

            return new Archer( name, race, armor );
        }
        private static Berserk CreateBerserk()
        {
            string name = ReadNameFromInput();
            var race = CreateRace();
            var weapon = CreateWeapon();

            return new Berserk( name, race, weapon );
        }
        private static King CreateKing()
        {
            string name = ReadNameFromInput();
            var race = CreateRace();

            return new King( name, race );
        }

        private static string ReadNameFromInput()
        {
            Console.Write( "Enter name: " );
            string name = Console.ReadLine();
            Console.WriteLine();
            while ( String.IsNullOrWhiteSpace( name ) )
            {
                Console.Write( "Name can't be empty or conatain onle spaces. Please try agian: " );
                name = Console.ReadLine();
            }

            return name;
        }
        private static IRace CreateRace()
        {
            Console.WriteLine( "Select race:" );
            Console.WriteLine( "Human" );
            Console.WriteLine( "Elf" );
            Console.WriteLine( "Orc" );
            Console.WriteLine( "Dwarf" );
            Console.Write( "Enter race: " );

            while ( true )
            {
                string userInput = Console.ReadLine();
                Console.WriteLine();
                switch ( userInput )
                {
                    case "Human":
                        return new Human();
                    case "Elf":
                        return new Elf();
                    case "Orc":
                        return new Orc();
                    case "Dwarf":
                        return new Dwarf();
                    default:
                        Console.Write( "Unknown race. Please enter again: " );
                        break;
                }
            }
        }
        private static IWeapon CreateWeapon()
        {
            Console.WriteLine( "Select weapon:" );
            Console.WriteLine( "Fists" );
            Console.WriteLine( "Dagger" );
            Console.WriteLine( "Sword" );
            Console.WriteLine( "Mace" );
            Console.WriteLine( "Bow" );
            Console.WriteLine( "Axe" );
            Console.WriteLine( "Excalibur" );
            Console.Write( "Enter weapon: " );

            while ( true )
            {
                string userInput = Console.ReadLine();
                Console.WriteLine();
                switch ( userInput )
                {
                    case "Fists":
                        return new Fists();
                    case "Dagger":
                        return new Dagger();
                    case "Sword":
                        return new Sword();
                    case "Mace":
                        return new Mace();
                    case "Bow":
                        return new Bow();
                    case "Axe":
                        return new Axe();
                    case "Excalibur":
                        return new Excalibur();
                    default:
                        Console.Write( "Unknown weapon. Please enter again: " );
                        break;
                }
            }
        }
        private static IArmor CreateArmor()
        {
            Console.WriteLine( "Select armor:" );
            Console.WriteLine( $"No armor" );
            Console.WriteLine( "Leather armor" );
            Console.WriteLine( "Chain armor" );
            Console.WriteLine( "Iron armor" );
            Console.Write( "Enter armor: " );

            while ( true )
            {
                string userInput = Console.ReadLine();
                Console.WriteLine();
                switch ( userInput )
                {
                    case "No armor":
                        return new NoArmor();
                    case "Leather armor":
                        return new LeatherArmor();
                    case "Chain armor":
                        return new ChainArmor();
                    case "Iron armor":
                        return new IronArmor();
                    default:
                        Console.Write( "Unknown armor. Please enter again: " );
                        break;
                }
            }
        }
    }
}
