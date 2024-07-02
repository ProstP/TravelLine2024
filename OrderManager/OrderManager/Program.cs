
HelloMessage();

string productName = ReadProductName();
int count = ReadPoductCount();
string userName = ReadUserName();
string address = ReadAddress();

while ( !IsOrderConfirm( productName, count, userName, address ) )
{
    Console.WriteLine( "Хотите ввести данные о товаре ещё раз?" );
    if ( !GetFromUserYesOrNot() )
    {
        ExitMessage();
        return;
    }

    productName = ReadProductName();
    count = ReadPoductCount();
    userName = ReadUserName();
    address = ReadAddress();
}

SuccessOrderMaking( productName, count, userName, address );

ExitMessage();

void HelloMessage()
{
    Console.WriteLine( "Здравуствуйте, вас приветствует сервис для создания заказов, давайте приступим к оформлению заказа." );
}

static string ReadProductName()
{
    Console.Write( "Введите название товара: " );

    string productName = Console.ReadLine();
    while ( string.IsNullOrWhiteSpace( productName ) )
    {
        Console.Write( "Название товара не может быть пустым или состоять только из пробелов. Попробуйте ввести ещё раз: " );
        productName = Console.ReadLine();
    }

    Console.WriteLine();
    return productName;
}

static int ReadPoductCount()
{
    Console.Write( "Введите количество товара: " );

    int count = 0;
    while ( !int.TryParse( Console.ReadLine(), out count ) )
    {
        Console.Write( "Количество товара должно быть задано числом. Попробуйте ввести ещё раз: " );
    }

    Console.WriteLine();
    return count;
}

static string ReadUserName()
{
    Console.Write( "Введите имя пользователя: " );

    string userName = Console.ReadLine();
    while ( string.IsNullOrWhiteSpace( userName ) )
    {
        Console.Write( "Имя пользователя не может быть пустым или состоять только из пробелов. Попробуйте ввести ещё раз: " );
        userName = Console.ReadLine();
    }

    Console.WriteLine();
    return userName;
}

static string ReadAddress()
{
    Console.Write( "Введите адрес доставки: " );

    string address = Console.ReadLine();
    while ( string.IsNullOrWhiteSpace( address ) )
    {
        Console.Write( "Адрес не может быть пустым или состоять только из пробелов. Попробуйте ввести ещё раз: " );
        address = Console.ReadLine();
    }

    Console.WriteLine();
    return address;
}

static bool IsOrderConfirm( string productName, int count, string userName, string address )
{
    Console.WriteLine( $"Здравствуйте, {userName}, вы заказали {productName} в количестве {count} на адрес {address}" );
    Console.WriteLine( "Всё верно?" );

    return GetFromUserYesOrNot();
}

static bool GetFromUserYesOrNot()
{
    while ( true )
    {
        Console.WriteLine( "[1] Да" );
        Console.WriteLine( "[2] Нет" );
        string ans = Console.ReadLine();
        Console.WriteLine();
        if ( ans == "1" )
        {
            return true;
        }
        else if ( ans == "2" )
        {
            return false;
        }
        else
        {
            Console.WriteLine( "Нет такого варианта ответа. Попробуйсте ввести ещё раз" );
        }
    }
}

static void SuccessOrderMaking( string productName, int count, string userName, string address )
{
    Console.WriteLine( $"{userName}! Ваш заказ {productName} в количестве {count} оформлен!" );
    Console.WriteLine( $"Ожидайте доставку по адресу {address} к {DateTime.Today.AddDays( 3 ).ToString( "D" )}" );
    Console.WriteLine();
}

static void ExitMessage()
{
    Console.WriteLine( "Всего вам доброго! До свидания!" );
}
