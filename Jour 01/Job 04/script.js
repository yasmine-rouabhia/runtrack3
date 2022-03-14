//permet d'afficher le resultat (box+page)
var year = prompt("Anné : ");

var result = bisextille(year);

alert(result);

function bisextille(année)
{
    var jours = new Date(année,2,0).getDate();
    if(jours == 29)
    {
        document.write(année = 'est bisextille');
        return(true);
    }
    else
    {
        document.write(année = "n'est pas bisextille");
        return(false);
    }
}
    








