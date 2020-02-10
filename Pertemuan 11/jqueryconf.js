$(document).ready(function(){

//animasi thdp box
$(".buttonStart").click(
    //animate terima 3 param. {apa yg mau dianimasiin, yg ada value}, lama animasi, callback
    //callback itu kl animate klr mau ngapain
    function(){
        $(".box").animate({"width":"100px", "opacity":"0.5"}, 3000,function(){
            alert("Garox")
        })

        $(".box").animate({"height":"100px", "opacity":"0.5"}, 3000)
        $(".box").animate({"width":"300px", "opacity":"0.5"}, 3000)
    } )

//slider
var slidercounter = 1;

    setInterval(function(){

        if(slidercounter<5){
             $(".slider-container").animate({"left":"-=300px"}, 2000)
             slidercounter++
        }
        else{
            $(".slider-container").animate({"left":"0px"}, 2000)
            slidercounter=1;
        }

    })
//End of document ready
})