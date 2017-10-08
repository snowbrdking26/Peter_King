/* exported myFunctionSticky */
/* exported openNav */
/* exported closeNav */
/* exported openBlog */

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

function openBlog() {
	"use strict";
    window.open("https://snowbrdking26.github.io/First-Blog/BlogPK.html");
}


