using Dictionary;

const string GetTranslateCommand = "1";
const string AddNewTranslateCommand = "2";
const string ExitCommand = "3";

HelloMessage();

string userCommand = "";
var dictionary = new MyDictionary();

while ( userCommand != ExitCommand )
{
    PrintMenu();
    userCommand = Console.ReadLine();
    Console.WriteLine();

    switch ( userCommand )
    {
        case GetTranslateCommand:
            GetTranslateFromDictionary( dictionary );
            break;
        case AddNewTranslateCommand:
            AddNewTranslateToDictionary( dictionary );
            break;
        case ExitCommand:
            break;
        default:
            Console.WriteLine( "Unknown Command. Please try again." );
            break;
    }
    Console.WriteLine();
}

dictionary.SaveDictionaryToFile();

void HelloMessage()
{
    Console.WriteLine( "Hello! You in the dictionary app" );
    Console.WriteLine( "Please, choose what do you need?" );
}

void PrintMenu()
{
    Console.WriteLine( "Menu" );
    Console.WriteLine( $"[{GetTranslateCommand}] Get Translate" );
    Console.WriteLine( $"[{AddNewTranslateCommand}] Add new translate" );
    Console.WriteLine( $"[{ExitCommand}] Save and exit" );
}

void GetTranslateFromDictionary( MyDictionary myDictionary )
{
    Console.Write( "Enter word: " );
    string word = Console.ReadLine();
    var translate = myDictionary.GetTranslate( word );
    if ( translate != null )
    {
        Console.WriteLine( $"Translate: {translate}" );
    }
    else
    {
        Console.WriteLine( "Word isn't in dictionary" );
        Console.WriteLine( "Do you want add translate?" );
        Console.WriteLine( "Print 1 to agree" );
        string command = Console.ReadLine();
        if ( command == "1" )
        {
            Console.Write( "Enter translate: " );
            string newTranslate = Console.ReadLine();
            myDictionary.AddNewTranslate( word, newTranslate );
        }
    }
}

void AddNewTranslateToDictionary( MyDictionary myDictionary )
{
    Console.Write( "Enter word: " );
    string word = Console.ReadLine();
    Console.Write( "Enter translate: " );
    string translate = Console.ReadLine();

    myDictionary.AddNewTranslate( word, translate );
}
