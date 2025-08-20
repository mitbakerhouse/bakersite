

function stickNavigation() {
  var header = document.getElementById("navigation");
  var headerHeight = header?.offsetTop;
  if (header && headerHeight) {
    if (window.pageYOffset > headerHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

// function replace_image(imgID: string, newImage: string) {
//   var old_image = document.getElementById(imgID)
//   if (old_image) {
  //     old_image.style = CSS
  //   }
// }

window.onscroll = function() {stickNavigation()};
window.onscroll = function () {
  var testElement = document.getElementById("page_spacer")
  testElement?.setAttribute("text", "hello world");
}
var button = document.getElementById("button")

// public async myFunction() {

// }
// function buttonClicking() {

// }