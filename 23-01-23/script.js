$(document).ready(function(){
    $('#dimensions').click(function(){
        var text='';
        text+="Width: " + $('.container').width() + "</br>";
        text+= "Height: " + $('.container').height() + "</br>";
        text+= "Inner Height: " + $('.container').innerHeight() + "</br>";
        text+= "Inner Width: " + $('.container').innerWidth() + "</br>";
        text+= "Outer Height: " + $('.container').outerHeight() + "</br>";
        text+= "Outer Width: " + $('.container').outerWidth() + "</br>";
        text+= "Outer Height(true): " + $('.container').outerHeight(true) + "</br>";
        text+= "Outer Width(true): " + $('.container').outerWidth(true) + "</br>";
        $('.answer').html(text);
        $('.answer').show();
    });

    //adding some text
    $('#addtext').click(function() {
        let add = $('input').val();
        $('p').append("<br>" + add);
        console.log('Text added at the end')
    });
    //change/add classes or themes
    $('#theme').click(function() {
        $('.answer').toggleClass("bluescheme");
    });
    
    console.log($('body').children());
});