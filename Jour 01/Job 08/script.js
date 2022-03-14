function sommesnombrespremiers(int1, int2)
{
    for( var i = 2 ; i < int1 && i < int2;  i ++)
    {
        if(int1 % i === 0 || int2 % 2 === 0)
        {
            return false;
        }
        else
        {
            return int1 + int2; 
        }
    }
}
alert(sommesnombrespremiers(55, 97));
