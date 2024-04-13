const body = document.querySelector("body");
const division = document.querySelector("div");
const header = document.querySelector("h1");
const hideOrShow = document.querySelector(".hideOrShow");
const showShaddow = document.querySelector(".showShaddow");
const nextHeader = document.getElementById("next-header");
const rejectShaddow = document.querySelector(".rejectShaddow")

body.style.backgroundImage = "url('DSC_0001.jpg')";
body.style.backgroundSize = "cover";

hideOrShow.addEventListener("click", function () {
    if (hideOrShow.innerHTML == "hide all") {
        nextHeader.style.visibility = "hidden"
        hideOrShow.innerHTML = "show all"
    } else {
        nextHeader.style.visibility = "visible"
        hideOrShow.innerHTML = "hide all"
    }
})

showShaddow.addEventListener("click", function () {
    nextHeader.style.filter = "blur(20px)";
})
rejectShaddow.addEventListener("click", function () {
    nextHeader.style.filter = "blur(0)";
})