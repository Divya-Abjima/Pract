let navbar = document.querySelector('.head').getElementsByTagName('ul');
if(screen.width <= 450) {
    $('ul').hide();
    mobileMenu();
    // $('ul').css('display','block');
function mobileMenu() {
    let menu = document.createElement('img');
    menu.src= 'icon-menu.svg';
    menu.setAttribute("alt","menu-icon");
    menu.setAttribute('onclick','showMenu()');
    $('.head').append(menu);
}
function showMenu() {
    let menuitem = document.createElement('ul');
    menuitem.innerHTML = '<li>Home</li><li>New</li><li>Popular</li><li>Trending</li><li>Categories</li>';
    $('ul').addClass('dropdown-content');
    $('ul').show();
}
}