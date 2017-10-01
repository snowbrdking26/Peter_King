myFunctionscroll()myFunctionscroll()// Get the navbar
var topnav = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = topnav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionscroll() {
  if (window.scrollY >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}

// topnav consolidation on right

function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}