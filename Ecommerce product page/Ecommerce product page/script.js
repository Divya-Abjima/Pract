$('.mycart').hide();
function openMenu() {
  document.getElementById('mobilenav').style.width = '50%';
}
function closeMenu() {
  document.getElementById('mobilenav').style.width = '0%';
}

let slideIndex = 1;
let thumbnail = document.getElementsByClassName('thumbnail');
console.log(thumbnail);
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentslides(n) {
  showSlides(slideIndex = n);
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
    thumbnail[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
  thumbnail[slideIndex - 1].style.display = "block";
}

let count = document.getElementById('count').innerHTML;
let newcount = 0;
function addToCart() {
  if (count <= 0) {
    $('.details').html('Your cart is empty.');
  }
  newcount += count;
  let total = newcount * 125.00;
  console.log(total);
  $('#cartcontent').html('Fall Limited Edition Sneakers<br> $125.00 x ' + newcount + " $" + total + ".00");
  $('#itemcount').text(newcount);
  $('#itemcount').show();
  count = 0;
  document.getElementById('count').innerHTML = count;
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
$('#cart').click(function () {
  $('.mycart').toggle();
})
$('#delete').click(function () {
  $('.details').html('Your cart is empty.');
  $('#itemcount').text(0);
})
function displayImage(n) {
  let currentImage;
  switch (n) {
    case 1: currentImage = "product 1.jpg";
      break;
    case 2: currentImage = "product 2.jpg";
      break;
    case 3: currentImage = "product 3.jpg";
      break;
    case 4: currentImage = "product 4.jpg";
      break;
    default: currentImage = "product 1.jpg"
  }
  document.getElementById('bigpicture').src = currentImage;
}
$('#bigpicture').click(function () {
  $(".slideshow-box").toggle();
})