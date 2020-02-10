
$('document').ready(function(){

    //$('#txt1') --> selector
//     $('#txt1').css('background-color', 'red');

//     $('p').css('color', 'rgb(61,92,255)');

//     $('#p1').mouseenter( function(){
//             $('#p1 span').hide();

//     });
//     $('#p1').mouseout(function(){
//         $('p1 span').show();
//     });

// $('#txt1').focus(function(){
//     console.log('henlo');
//     $('#txt1').css('background', 'blue');

// });

// $('#txt1').blur(function(){
//     console.log('henlo');
//     $('#txt1').css('background', 'white');    
// });

// $('#submit1').click(function(e){
//     alert('sukses');
//     console.log(e)
//     e.preventDefault()
//     console.log(e.currentTarget.id)
// });   


//Struktur HTML utak atik
$('li').click(function(){
    //hapus li
    // $('li').removeClass();
    
    //nambah class css baru
    // $('li').addClass('list1');
    
    //ganti warna berkali2
    $('li').toggleClass();

})

$('#txt1').keyup(function(e){
    let code = e.which;
    if(code =13){
        let value = e.currentTarget.value;
        $('ul').append('<li>'+value+'</li>');

    }

});

$('ul').before('<h1>Bonus</h1>')
$('ul').after('<h1>Binus</h1>')

$('a').attr('target', '_blank')
// $('a').removeAttr('target')

//ANIMATIONS

$('#fadeinbtn').click(function(){
    // $('#animasi1').fadein('slow');
$('#animasi1').fadeIn(3000,function(){
    $('#fadeinbtn').attr('value', 'done')

});
})

$('#fadeoutbtn').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').fadeOut(3000);
})

$('#togglebtn').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').fadeToggle('fast');
})

$('#slideupbtn').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').slideUp('fast');
})

$('#slidedownbtn').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').slideDown('fast');
})

$('#slidetogglebtn').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').slideToggle('fast');
})

$('#stopbtn').click(function(){
    // stop animasi 
$('#animasi1').stop();
})

$('#moveleft').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').left('fast');
})

$('#moveright').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').right('fast');
})

$('#movearound').click(function(){
    // $('#animasi1').fadeout('slow');
$('#animasi1').around('fast');
})




});