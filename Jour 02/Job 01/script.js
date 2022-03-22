document.addEventListener('DOMContentLoaded', (event)=>{
    var boutton = document.getElementById('button')
    // console.log(boutton);

    
    boutton.addEventListener('click', function citation(){
        console.log(Citation_);
        Citation_.remove();
    })
    
var Citation_= document.getElementById('Citation_')
// console.log(p);
})