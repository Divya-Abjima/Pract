$('document').ready( function() {
    $('.heading').click(function () {
       $('.heading').animate({
        width: '+=300px'
       },2000);
       $('h2').css({"fontStyle": "italic"});
    });

    $('#click').click(function () {
        $('#click').css("display" , "none");
        $('#content').css("display" , "block");
        console.log('clicked');
        $('.heading').css('borderRadius', '10px 25px 0px 0px');
    });
    $('#fadeIn').click( function(){
         $('#content').fadeIn("slow");
         console.log('clicked');
    });
    $('#fadeOut').click( function(){
        $('#content').fadeOut("slow");
        console.log('clicked');
   });
   $('#toggleFade').click( function(){
    $('#content').fadeToggle("slow");
    console.log('clicked');
});
});