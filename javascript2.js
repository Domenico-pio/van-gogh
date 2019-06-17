// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var pic = document.getElementsByClassName("pic");

// Get the offset position of the navbar
var vh=(window.innerHeight)/100;
var sticky1 = -1*(pic[4].offsetTop-(10*vh));
var sticky2 = (sticky1+(10*vh)) * 2;
var sticky3 = (sticky1+(10*vh)) * 3;
var sticky4 = (sticky1+(10*vh)) * 4;
var sticky5 = (sticky1+(10*vh)) * 5;


//window.alert(sticky1 +"  "+ window.pageYOffset);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky1) {
    pic[4].style.position="fixed";
    pic[4].style.top="-10vh";
  } else {
    pic[4].style.position="relative";
    pic[4].style.top="0vh";
  }
  if (window.pageYOffset >= sticky2) {
    pic[3].style.position="fixed";
    pic[3].style.top="-40vh";
  } else {
    pic[3].style.position="relative";
    pic[3].style.top="0vh";
  }
  if (window.pageYOffset >= sticky3) {
    pic[2].style.position="fixed";
    pic[2].style.top="-60vh";
  } else {
    pic[2].style.position="relative";
    pic[2].style.top="0vh";
  }
  if (window.pageYOffset >= sticky4) {
    pic[1].style.position="fixed";
    pic[1].style.top="-80vh";
  } else {
    pic[1].style.position="relative";
    pic[1].style.top="0vh";
  }
  if (window.pageYOffset >= sticky5) {
    pic[0].style.position="fixed";
    pic[0].style.top="-80vh";
  } else {
    pic[0].style.position="relative";
    pic[0].style.top="0vh";
  }
}
