const pageBanner = document.getElementById("page-banner");
const books = document.querySelector("#book-list ul");
const deleteBtn = document.querySelector("#book-list .delete");
const form = document.forms.addBook;

form.addBtn.onclick = (ev) => {
    ev.preventDefault()
    let inputValue = form.input.value;

    if (inputValue) {
        books.innerHTML += `
        <li>
            <span class='name'>${inputValue}</span>
            <span class='delete'>delete</span>
        </li>`
    }
    form.input.value = '';
}