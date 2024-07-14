using Fighters.Models;
using Fighters.Models.Fighters;

namespace Fighters
{
    public class GameManager
    {
        List<IFighter> _fighters = new();
        bool _isRandomDamageEnabled = false;
        bool _isCriticalDamageEnabled = false;

        public void Run()
        {
            GameCommands command = GameCommands.CreateNewFighter;
            while ( command != GameCommands.Exit )
            {
                PrintMenu();
                try
                {
                    string userInput = Console.ReadLine();
                    command = ParseCommandFromStr( userInput );
                    if ( command == GameCommands.Exit )
                    {
                        break;
                    }
                    ProcessCommand( command );
                    Console.WriteLine( "Enter enter key to continue" );
                    userInput = Console.ReadLine();
                }
                catch ( ArgumentException e )
                {
                    Console.WriteLine( $"Error: {e.Message}" );
                    Console.WriteLine();
                }

            }
        }

        private void PrintMenu()
        {
            Console.WriteLine( "Menu:" );
            Console.WriteLine( $"{( int )GameCommands.CreateNewFighter}-Create new fighter" );
            Console.WriteLine( $"{( int )GameCommands.PrintAllFighters}-Print all fighters" );
            Console.WriteLine( $"{( int )GameCommands.Battle}-Battle" );
            Console.WriteLine( $"{( int )GameCommands.RecoverAllFighters}-Recover all fighter" );
            string actionToRandomDamage = _isRandomDamageEnabled ? "Disable" : "Enable";
            Console.WriteLine( $"{( int )GameCommands.SwitchDamageRandomEnabled}-{actionToRandomDamage} random damage" );
            string actionToCritiacalDamage = _isCriticalDamageEnabled ? "Disable" : "Enable";
            Console.WriteLine( $"{( int )GameCommands.SwitchCriticalDamageEnabled}-{actionToCritiacalDamage} critical damage" );
            Console.WriteLine( $"{( int )GameCommands.Exit}-Exit" );
            Console.WriteLine();
        }

        private void ProcessCommand( GameCommands command )
        {
            switch ( command )
            {
                case GameCommands.CreateNewFighter:
                    CreateAndAddNewFighter();
                    break;
                case GameCommands.PrintAllFighters:
                    PrintAllFighters();
                    break;
                case GameCommands.Battle:
                    SelectFightersToBattle();
                    break;
                case GameCommands.RecoverAllFighters:
                    RecoverAllFighters();
                    break;
                case GameCommands.SwitchDamageRandomEnabled:
                    _isRandomDamageEnabled = !_isRandomDamageEnabled;
                    break;
                case GameCommands.SwitchCriticalDamageEnabled:
                    _isCriticalDamageEnabled = !_isCriticalDamageEnabled;
                    break;
                case GameCommands.Exit:
                    break;
                default:
                    throw new ArgumentException( "Unknown command" );
            }
            Console.WriteLine();
        }

        private GameCommands ParseCommandFromStr( string str )
        {
            if ( !Enum.TryParse( str, out GameCommands command ) )
            {
                throw new ArgumentException( "Unknown command" );
            }

            return command;
        }

        private void CreateAndAddNewFighter()
        {
            var newFighter = FightersCreator.CreateNewFighter();
            _fighters.Add( newFighter );

            Console.WriteLine( "Fighter created" );
        }
        private void PrintAllFighters()
        {
            for ( int i = 0; i < _fighters.Count; i++ )
            {
                Console.WriteLine( $"{i}:" );
                _fighters[ i ].Print();
                Console.WriteLine();
            }

            Console.WriteLine( "All fighter printed" );
        }
        private void SelectFightersToBattle()
        {
            if ( _fighters.Count < 2 )
            {
                throw new ArgumentException( "You need at least 2 fighters to fight" );
            }
            Console.WriteLine( "Please, select indexes of fighters (with space): " );
            string line = Console.ReadLine();
            string[] fighterIndexesStr = line.Split( new char[] { ' ' } );
            if ( fighterIndexesStr.Length != 2 )
            {
                throw new ArgumentException( "You can select only 2 fighters to battle" );
            }

            int firstIndex, secondIndex;
            if ( !int.TryParse( fighterIndexesStr[ 0 ], out firstIndex )
                || !int.TryParse( fighterIndexesStr[ 1 ], out secondIndex ) )
            {
                throw new ArgumentException( "Index of fighters must be digit" );
            }
            if ( firstIndex >= _fighters.Count )
            {
                throw new ArgumentException( $"Unknown fighter: {firstIndex}" );
            }
            if ( secondIndex >= _fighters.Count )
            {
                throw new ArgumentException( $"Unknown fighter: {secondIndex}" );
            }

            var winner = BattleHandler.Battle(
                _fighters[ firstIndex ],
                _fighters[ secondIndex ],
                _isRandomDamageEnabled,
                _isCriticalDamageEnabled );

            Console.WriteLine( "Winer:" );
            winner.Print();
        }
        private void RecoverAllFighters()
        {
            _fighters.ForEach( fighter => fighter.Recover() );

            Console.WriteLine( "All fighter was recover" );
        }
    }
}
