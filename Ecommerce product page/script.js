$('.mycart').hide();
function openMenu() {
  document.getElementById('mobilenav').style.width = '50%';
}
function closeMenu() {
  document.getElementById('mobilenav').style.width = '0%';
}

let slideIndex = 1;
let thumbnail;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('shoeslides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // $('')
  slides[slideIndex - 1].style.display = 'block';
}

let count = document.getElementById('count').innerHTML;
function addToCart() {
  if (count <= 0) {
    $('.details').html('Your cart is empty.');
    $('.mycart').show();
  }
  else {
    let total = count * 125.00;
    console.log(total);
    $('#cartcontent').html('Fall Limited Edition Sneakers<br> $125.00 x ' + count + " $" + total + ".00");
    $('.mycart').show();
  }
}
function addItem() {
  count++;
  $('#count').text(count);
}
function removeItem() {
  if (count > 0) {
    count--;
    $('#count').text(count);
  }
}
// function showMycart() {
//     $('.mycart').toggle({ function() {
//       addToCart();
//       $('.mycart').show();
//     }});
// }