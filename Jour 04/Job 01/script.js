window.addEventListener("DOMContentLoaded", (event)=>
{
    let p = document.querySelector('p');

    let body = document.querySelector('body');

    var btn = document.getElementById('button');

    btn.addEventListener('click', function(){
        fetch('expression.txt')
        .then((Response) => Response.text())
        .then(Response => { 
            console.log(Response)
            body.append(p)
            p.append(Response)
        })
    
        .catch((Error) => console.log(Error))

    })
})