function afficherJourssemaines()
{
    const joursemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    for(var j = 0; j < joursemaines.length; j ++)
    {
        const element = joursemaines[j];
        console.log(element);
    }
    
}
afficherJourssemaines();