document.addEventListener('DOMContentLoaded', (event)=>{

$(document).ready(function (){
    $("#button").click(function(){
        $("p").show();
    });

    $("#button_1").click(function(){
        $("p").hide()
    });
 
});
})
