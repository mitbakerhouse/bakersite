window.onscroll = function() {scrollResponse()};

var rachael = document.getElementById("area_director");
var sticky = rachael.offsetTop;

function scrollResponse() {
  if (window.pageYOffset > sticky) {
    rachael.classList.add("sticky");
  } else {
    rachael.classList.remove("sticky");
  }
}