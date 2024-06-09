const pageBanner = document.getElementById("page-banner");
const books = document.querySelector("#book-list ul");
const deleteBtn = document.querySelectorAll("#book-list .delete");
const form = document.forms.addBook;


form.addBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    addnewElement();
})

function addnewElement() {

    let inputValue = form.input.value;
    const list = document.createElement("li");
    const nameList = document.createElement("span");
    const deleteList = document.createElement("span");

    if (inputValue) {
        nameList.classList.add('name');
        deleteList.classList.add('delete');

        nameList.innerHTML = inputValue;
        deleteList.innerHTML = 'delete';

        list.appendChild(nameList);
        list.appendChild(deleteList);
        books.appendChild(list);

    }
    form.input.value = '';
}

books.addEventListener("click", function (ev) {

    if (ev.target.className == 'delete') {
        // ev.target.parentElement.remove();
        const li = ev.target.parentElement;
        // li.parentNode.removeChild(li);
        li.remove()
    }
})

form.hide.onclick = function (ev) {

    if (form.hide.checked) {
        books.style.display = "none";
    } else {
        // books.style.display = "initial";
        books.style.display = "block";
    }
}