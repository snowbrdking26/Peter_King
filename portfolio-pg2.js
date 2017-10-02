// JavaScript Document
/* exported openModal */
/* exported slideIndex */
/* exported plusSlides */
/* exported closeModal */
/* exported currentSlide */

function openModal() {
	"use strict";
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
	"use strict";
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	"use strict";
  showSlides(slideIndex += n);
}

function currentSlide(n) {
	"use strict";
  showSlides(slideIndex = n);
}

function showSlides(n) {
	"use strict";
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* exported myFunctionSticky */
/* exported openNav */
/* exported closeNav */

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunctionSticky() {
	"use strict";
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//side nav

function openNav() {
	"use strict";
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	"use strict";
    document.getElementById("mySidenav").style.width = "0";
}

