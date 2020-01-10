let menuState = 0
function displayNav () {
    if (menuState === 0) {
        document.getElementById('nav-button').style.transform = 'rotate(-180deg)'
        document.getElementById('nav-content').style.left = '1%'
        menuState = 1
    } else {
        document.getElementById('nav-button').style.transform = 'rotate(0deg)'
        document.getElementById('nav-content').style.left = '-20%'
        menuState = 0
    }
    return false
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}