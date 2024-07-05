namespace Dictionary
{
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
}
