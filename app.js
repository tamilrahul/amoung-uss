const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const button = document.getElementById("button");
const redimage = document.getElementById("red-image");
const blueimage = document.getElementById("blue-image");
const yellowimage = document.getElementById("yellow-image");

button.onclick=()=>{
if(red.checked){
redimage.classList.remove("hidden");
redimage.classList.add("eject");
}

if(blue.checked){
blueimage.classList.remove("hidden");
blueimage.classList.add("eject");
}

if(yellow.checked){
yellowimage.classList.remove("hidden");
yellowimage.classList.add("eject");
}
}