const body = document.querySelector("body");
const division = document.querySelector("div");
const header = document.querySelector("h1");
const button = document.querySelector("button");
button.addEventListener("click", function () {
    let myhello = '';
    for (let i = 2; i < 6; i++) {
        myhello += `<h${i}>Hello my World</h${i}>`;
    }
    body.innerHTML += myhello;
})