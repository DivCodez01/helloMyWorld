document.title = "IMAGE SLIDE"

const imgs = [
    "IMG1",
    "IMG2",
    "IMG3",
    "IMG4"
]

const img = document.querySelector("img");
const label = document.querySelector("label");

let change = 0;
let src = `${imgs[change]}.JPG`;
console.log(src)
img.src = src;
img.setAttribute("alt", "my Image")
console.log(img)

label.addEventListener("click", function () {
    change += 1;
    src = `${imgs[change]}.JPG`;
    img.src = src;
    console.log(img)
    console.log(change)
    if (change - 1 == imgs.length - 2) {
        change = -1;
        src = `${imgs[change]}.JPG`;
        console.log("good")
    }
})