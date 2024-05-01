document.title = "IMAGE SLIDE"

const imgs = [
    "IMG1.JPG",
    "IMG1.JPG",
    "IMG1.JPG",
    "IMG1.JPG"
];

const img = document.querySelector("img");
const label = document.querySelector("label");

let src = `${imgs[0]}`
let change = 0;
img.src = src;
img.setAttribute("alt", "my Image")
console.log(img)

label.addEventListener("click", function () {

})