$('document').ready(function () {
    $("h1").click(function () {
   console.log('heading tag');
   //selecting by element name
   $('p').hide();
   console.log(this);
   });

   //selecting first h2 element
   $('h2:first').click(function () {
    document.getElementsByClassName('para')[0].innerHTML = 'Selected';
    console.log(this);
   });

   //selecting  by id
   $('#first').dblclick(function () {
    document.getElementById('first').style.background = "cyan";
    console.log(this);
   });

   $('div').on(
   {
     click: function () {
        console.log('clicked');
     },
     mouseleave: function () {
        console.log('mouse leave');
        $(this).show(800);
     },
     mouseenter: function () {
        console.log('mouse entered');
        $(this).hide(800);
     }
   })
});