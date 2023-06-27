const myLibrary = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 240,
        read: true
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Dom Form Elements

const form = document.getElementById("newBookForm")
const formContainer = document.getElementById("form-container")

function formInfo(e) {
    tableBody.innerHTML = ""
    const formData = (document.getElementsByClassName("form-data"))
    let title = formData[0].value
    let author = formData[1].value
    let pages = formData[2].value
    let read = formData[3].checked
    let newBook = new Book(title, author, pages, read)
    console.log(newBook)
    myLibrary.push(newBook)
    formContainer.style.display = "none"
    displayLibrary(myLibrary)
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    formInfo()

    form.reset()

})

function showForm() {

    formContainer.style.display = "block"

}

function closeForm() {

    formContainer.style.display = "none"

}

// DOM Table/content elements

const mainSection = document.getElementById("main-container")

const newBookButton = document.createElement("button");
newBookButton.textContent = "Add"
newBookButton.classList.add("new-book-button")
newBookButton.addEventListener("click", () => showForm())

const mainTable = document.createElement("table");
mainTable.classList.add("main-table")

const tableBody = document.createElement("tbody")
tableBody.classList.add("tableBody")

const titleHeader = document.createElement("th");
titleHeader.textContent = "Title";
titleHeader.classList.add("title-header")

const authorHeader = document.createElement("th");
authorHeader.textContent = "Author";
authorHeader.classList.add("author-header")

const pagesHeader = document.createElement("th");
pagesHeader.textContent = "Pages";
pagesHeader.classList.add("pages-header")

const readHeader = document.createElement("th");
readHeader.textContent = "Read";
readHeader.classList.add("read-header")

const deleteHeader = document.createElement("th");
deleteHeader.textContent = "Delete"
deleteHeader.classList.add("delete-header")


mainTable.appendChild(titleHeader)
mainTable.appendChild(authorHeader)
mainTable.appendChild(pagesHeader)
mainTable.appendChild(readHeader)
mainTable.appendChild(deleteHeader)
mainTable.appendChild(tableBody)

mainSection.appendChild(mainTable);
mainSection.appendChild(newBookButton)



function displayLibrary(library) {
    if (library.length !== 0) {
        for (let values of library) {

            const bookRow = document.createElement("tr");
            const titleData = document.createElement("td");
            const authorData = document.createElement("td");
            const pagesData = document.createElement("td");
            const readData = document.createElement("td");
            const deleteButton = document.createElement("button")

            deleteButton.type = "button"
            deleteButton.classList.add("button")
            deleteButton.addEventListener("click", (e) => {
                e.target.parentNode.remove()
            })

            titleData.textContent = values.title
            authorData.textContent = values.author
            pagesData.textContent = values.pages
            readData.textContent = values.read ? "Read" : "Not Read"

            bookRow.appendChild(titleData)
            bookRow.appendChild(authorData)
            bookRow.appendChild(pagesData)
            bookRow.appendChild(readData)
            bookRow.appendChild(deleteButton)

            tableBody.appendChild(bookRow)

        }
    }
}


window.onload = function pageRender() {
    displayLibrary(myLibrary);
}