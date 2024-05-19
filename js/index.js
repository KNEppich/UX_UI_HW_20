console.log ("Test");

var nav = document.querySelector("#digital")
var digital = document.querySelector("#digital2")

var scroll = function (){
   console.log("scrolling") 
   nav.scrollTo(digital)
}
nav.addEventListener("click", scroll)