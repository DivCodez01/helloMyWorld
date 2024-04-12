const body = document.querySelector("body");
const division = document.querySelector("div");
const header = document.querySelector("h1");
const button = document.querySelector("button");
const nextHeader = document.getElementById("next-header");
const container = document.querySelector(".container");

container.style.backgroundImage = "url('DSC_0001.jpg')";
container.style.backgroundSize = "cover";
container.style.width = "400px"

button.addEventListener("click", function () {
    if (button.innerHTML == "hide all") {
        nextHeader.style.visibility = "hidden"
        button.innerHTML = "show all"
    } else {
        nextHeader.style.visibility = "visible"
        button.innerHTML = "hide all"
    }
})