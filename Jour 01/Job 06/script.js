
function fizzbuzz()
{
    for( var Nombre = 1; Nombre <= 152; Nombre ++ )
    {
        if((Nombre %3 == 0) && (Nombre %5 == 0))
        {
            console.log( "FizzBuzz" );
        }
        else if( Nombre %3 == 0 )
            {
                console.log( "Fizz" );
            }
        
            else if( Nombre %5 == 0 )
                {
                    console.log( "Buzz" );
                }
            else
                {
                    console.log(Nombre)
                }
    }

}
fizzbuzz();