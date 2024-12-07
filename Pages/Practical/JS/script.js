// Variables 

var header = document.getElementById("headerNav");
var pageBody = document.getElementById("mainPage" , "about");

//                      <ul>
// need to add .dropdown to <li class=dropdown>
// need to add .dropList to     <a href=js:void(0)> 
// need to add .dropCont to     <div class= .dropCont>
//                                  <a href="#">list contenet in own variables
//                                  <a href="#">list contenet in own variables
//                                  <a href="#">list contenet in own variables
//                              </div>
//                          </li>
//                      </ul>

// Sticky will happen after the pageHeader is scrolled past
// var sticky = pageBody.offsetTop + pageBody.offsetHeight;  

// Combine both functions into one onscroll handler
window.onscroll = function() { stickyHeadAndShrink() };

function stickyHeadAndShrink() {
    // Shrink Ui, font size when user scrolls down
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 50) {
        header.style.fontSize = "15px";  // Shrink font size
    } else {
        header.style.fontSize = "30px";  // Reset font size
    }

    // Add sticky class when the user scrolls past the header
    // if (window.pageYOffset > sticky) { This one causes page to jump down - one bellow jumps up (marginally better)
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 50) {
    header.classList.add("sticky" , "dropdown");
    pageBody.classList.add("margin")
    } else {
        header.classList.remove("sticky" , "dropdown"); 
        pageBody.classList.remove("margin")

    }
}
// Menue Dropdown on mobile //

var header = document.getElementById("headerNav");
var menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function() {
    header.classList.toggle("active");  // Toggle the active class to show/hide the menu
};