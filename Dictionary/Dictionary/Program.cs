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
            GetTranslateFromDictionary( ref dictionary );
            break;
        case AddNewTranslateCommand:
            AddNewTranslateToDictionary( ref dictionary );
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
    Console.WriteLine( $"[{ExitCommand}] Exit" );
}

void GetTranslateFromDictionary( ref MyDictionary myDictionary )
{
    Console.Write( "Write word: " );
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

void AddNewTranslateToDictionary( ref MyDictionary myDictionary )
{
    Console.Write( "Enter word: " );
    string word = Console.ReadLine();
    Console.Write( "Enter translate: " );
    string translate = Console.ReadLine();

    myDictionary.AddNewTranslate( word, translate );
}

class MyDictionary
{
    const string _fileNameWithDitionary = "Dictionary.txt";
    private Dictionary<string, string> _dictionary;

    public MyDictionary()
    {
        _dictionary = new Dictionary<string, string>();
        ReadWordsAndTranslatesFromFile();
    }

    public void AddNewTranslate( string word, string translate )
    {
        if ( _dictionary.ContainsKey( word ) || _dictionary.ContainsValue( translate )
            || _dictionary.ContainsKey( translate ) || _dictionary.ContainsValue( word ) )
        {
            Console.WriteLine( "Word and translate is already in the dictionary" );
            return;
        }
        _dictionary[ word ] = translate;
    }

    public string GetTranslate( string word )
    {
        if ( _dictionary.ContainsKey( word ) )
        {
            return _dictionary[ word ];
        }
        else if ( _dictionary.ContainsValue( word ) )
        {
            return _dictionary.First( x => x.Value == word ).Key;
        }

        return null;
    }

    public void SaveDictionaryToFile()
    {
        StreamWriter streamWriter = new StreamWriter( _fileNameWithDitionary );

        foreach ( var pair in _dictionary )
        {
            streamWriter.WriteLine( $"{pair.Key}:{pair.Value}" );
        }

        streamWriter.Close();
    }

    private void ReadWordsAndTranslatesFromFile()
    {
        StreamReader streamReader = new StreamReader( _fileNameWithDitionary );
        string line = streamReader.ReadLine();

        while ( line != null )
        {
            string[] words = line.Split( new char[] { ':' } );

            AddNewTranslate( words[ 0 ], words[ 1 ] );

            line = streamReader.ReadLine();
        }

        streamReader.Close();
    }
}
