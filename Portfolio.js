/* exported myFunctionSticky */
/* exported openNav */
/* exported closeNav */
/* exported openResume*/
/* exported openBlog */
/* exported openSkiBarn */
/* exported openMemory */
/* exported openWebsite */

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

function openResume() {
	"use strict";
    window.open("https://snowbrdking26.github.io/Peter_King/WDI_Resume.pdf");
}

function openBlog() {
	"use strict";
    window.open("https://snowbrdking26.github.io/First-Blog/BlogPK.html");
}

function openSkiBarn() {
	"use strict";
    window.open("https://dash.generalassemb.ly/snowboardking26/build-your-own-business-website");
}

function openMemory() {
	"use strict";
    window.open("https://snowbrdking26.github.io/memory-game-improved/Memory-game-improved.html");
}

function openWebsite() {
	"use strict";
	window.open("https://snowbrdking26.github.io/First-Website/WebsitePK.html");
}
