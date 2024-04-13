const body = document.querySelector("body");
const division = document.querySelector("div");
const header = document.querySelector("h1");
const hideOrShow = document.querySelector(".hideOrShow");
const showShaddow = document.querySelector(".showShaddow");
const nextHeader = document.getElementById("next-header");
const rejectShaddow = document.querySelector(".rejectShaddow");
const container = document.querySelector(".container");
const label = document.querySelector("label");

label.addEventListener("click", function () {
    if (label.innerHTML == "X") {
        label.innerHTML = "✔";
        container.style.visibility = "hidden";
    } else {
        label.innerHTML = "X";
        container.style.visibility = "visible";
    }
})

body.style.backgroundImage = "url('DSC_0001.jpg')";
body.style.backgroundSize = "cover";

hideOrShow.addEventListener("click", function () {
    if (hideOrShow.innerHTML == "hide all") {
        nextHeader.style.visibility = "hidden"
        hideOrShow.innerHTML = "show all"
    } else {
        nextHeader.style.visibility = "visible"
        hideOrShow.innerHTML = "hide all";
        container.style.backgroundImage = "url('20240215_062500.jpg')";
        container.style.backgroundSize = "cover";
        container.style.width = "430px";
    }
})

showShaddow.addEventListener("click", function () {
    nextHeader.style.filter = "blur(20px)";
})
rejectShaddow.addEventListener("click", function () {
    nextHeader.style.filter = "blur(0)";
})