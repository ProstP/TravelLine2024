namespace Dictionary
{
    class MyDictionary
    {
        const string _fileNameWithDiсtionary = "Dictionary.txt";
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
                throw new ArgumentException( "Word or translate is already in the dictionary" );
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
            using ( StreamWriter streamWriter = new StreamWriter( _fileNameWithDiсtionary ) )
            {

                foreach ( var pair in _dictionary )
                {
                    streamWriter.WriteLine( $"{pair.Key}:{pair.Value}" );
                }
            }
        }

        private void ReadWordsAndTranslatesFromFile()
        {
            using ( StreamReader streamReader = new StreamReader( _fileNameWithDiсtionary ) )
            {
                string line = streamReader.ReadLine();

                while ( line != null )
                {
                    string[] words = line.Split( new char[] { ':' } );

                    AddNewTranslate( words[ 0 ], words[ 1 ] );

                    line = streamReader.ReadLine();
                }
            }
        }
    }
}
