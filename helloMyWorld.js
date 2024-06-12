const body = document.querySelector("body");
const division = document.querySelector("div");
const header = document.querySelector("h1");
const hideOrShow = document.querySelector(".hideOrShow");
const showShaddow = document.querySelector(".showShaddow");
const nextHeader = document.getElementById("next-header");
const rejectShaddow = document.querySelector(".rejectShaddow");
const container = document.querySelector(".container");
const label = document.querySelector("label");
const otherHeader1 = document.querySelector(".otherHeader1");
const otherHeader2 = document.querySelector(".otherHeader2");
const otherHeader3 = document.querySelector(".otherHeader3");
const otherHeader4 = document.querySelector(".otherHeader4");
const otherHeader5 = document.querySelector(".otherHeader5");
const cancel = document.querySelector(".cancel");
const cancel1 = document.querySelector(".cancel1");
const cancel2 = document.querySelector(".cancel2");
const cancel3 = document.querySelector(".cancel3");
const cancel4 = document.querySelector(".cancel4");
const cancel5 = document.querySelector(".cancel5");

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

cancel1.addEventListener("click", function () {
    if (cancel1.innerHTML == "X") {
        otherHeader1.style.visibility = "hidden";
        cancel1.innerHTML = "✔";
    } else {
        otherHeader1.style.visibility = "visible";
        cancel1.innerHTML = "X";
    }
})
cancel2.addEventListener("click", function () {
    if (cancel2.innerHTML == "X") {
        otherHeader2.style.visibility = "hidden";
        cancel2.innerHTML = "✔";
    } else {
        otherHeader2.style.visibility = "visible";
        cancel2.innerHTML = "X";
    }
})
cancel3.addEventListener("click", function () {
    if (cancel3.innerHTML == "X") {
        otherHeader3.style.visibility = "hidden";
        cancel3.innerHTML = "✔";
    } else {
        otherHeader3.style.visibility = "visible";
        cancel3.innerHTML = "X";
    }
})
cancel4.addEventListener("click", function () {
    if (cancel4.innerHTML == "X") {
        otherHeader4.style.visibility = "hidden";
        cancel4.innerHTML = "✔";
    } else {
        otherHeader4.style.visibility = "visible";
        cancel4.innerHTML = "X";
    }
})
cancel5.addEventListener("click", function () {
    if (cancel5.innerHTML == "X") {
        otherHeader5.style.visibility = "hidden";
        cancel5.innerHTML = "✔";
    } else {
        otherHeader5.style.visibility = "visible";
        cancel5.innerHTML = "X";
    }
})


function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}