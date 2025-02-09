/* Explaination

First, set the slideIndex to 1. (First picture)

Then call showDivs() to display the first image.

When the user clicks one of the buttons call plusDivs().

The plusDivs() function subtracts one or  adds one to the slideIndex.

The showDiv() function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex.

If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero.

If the slideIndex is less than 1 it is set to number of elements (x.length).
*/

let slideIndex = 1;
/* Autoplay */
/* let slideIndex = 0; */

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  /* Autoplay */
  /*
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  */

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  /* Autoplay */
  /* setTimeout(showSlides, 2000); */
}