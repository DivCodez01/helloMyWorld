document.title = "Hello my World";
document.body.style.backgroundImage = "url('20240215_062500.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
const helloWorld2 = document.querySelector(".hello-world2");
const helloWorld3 = document.querySelector(".hello-world3");
const helloWorld4 = document.querySelector(".hello-world4");
const helloWorld5 = document.querySelector(".hello-world5");
const helloWorld6 = document.querySelector(".hello-world6");
let hideBtn = document.getElementById("hide-btn")

const containerHello2 = document.querySelector(".container-hello2");
const containerHello3 = document.querySelector(".container-hello3");
const containerHello4 = document.querySelector(".container-hello4");
const containerHello5 = document.querySelector(".container-hello5");
const containerHello6 = document.querySelector(".container-hello6");

const showHelloMyWorld = () => {
    helloWorld2.style.visibility = "visible"
    containerHello2.innerHTML += "<button onclick='showHelloMyWorld2()'>show other</button>"
    hideBtn.style.visibility = "hidden"
}
const showHelloMyWorld2 = () => {
    helloWorld3.style.visibility = "visible"
    containerHello3.innerHTML += "<button onclick='showHelloMyWorld3()'>show other</button>"
    containerHello2.style.visibility = "hidden"
}
const showHelloMyWorld3 = () => {
    helloWorld4.style.visibility = "visible"
    containerHello4.innerHTML += "<button onclick='showHelloMyWorld4()'>show other</button>"
    containerHello3.style.visibility = "hidden"
}
const showHelloMyWorld4 = () => {
    helloWorld5.style.visibility = "visible"
    containerHello5.innerHTML += "<button onclick='showHelloMyWorld5()'>show other</button>"
    containerHello4.style.visibility = "hidden"
}
const showHelloMyWorld5 = () => {
    helloWorld6.style.visibility = "visible"
    containerHello6.innerHTML += "<button onclick='hideHelloMyWorld()'>hide</button>"
    containerHello5.style.visibility = "hidden"
}
const hideHelloMyWorld = () => {
    containerHello6.style.visibility = "hidden"
} 