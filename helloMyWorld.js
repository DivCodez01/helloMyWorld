const body = document.querySelector("body");
const division = document.querySelector("div");
const header = document.querySelector("h1");
const button = document.querySelector("button");
const nextHeader = document.getElementById("next-header");

body.style.backgroundImage = "url('DSC_0001.jpg')"
body.style.backgroundSize = "cover"

button.addEventListener("click", function () {
    if (button.innerHTML == "hide all") {
        nextHeader.style.visibility = "hidden"
        button.innerHTML = "show all"
    } else {
        nextHeader.style.visibility = "visible"
        button.innerHTML = "hide all"
    }
})
