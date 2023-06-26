let myLibrary = [["Meow", "meow", 12, "read"], ["Woof", "woof", 100, "read"], ["Screech", "screech", 200, "not read"]];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages}, ${read}`
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push([newBook])
}

const mainSection = document.getElementById("main-container")

const newBookButton = document.createElement("button");
newBookButton.textContent = "New Book"
newBookButton.classList.add("new-book-button")
const formContainer = document.getElementById("form-container")
newBookButton.addEventListener("click", function () { formContainer.classList = "form" })
mainSection.appendChild(newBookButton)
const formElem = document.getElementById("newBookForm")

formElem.onsubmit = addBookToLibrary(formElem)

function submitForm(e) {
    e.preventDefault


}

const mainTable = document.createElement("table");
mainTable.classList.add("main-table")
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

mainTable.appendChild(titleHeader)
mainTable.appendChild(authorHeader)
mainTable.appendChild(pagesHeader)
mainTable.appendChild(readHeader)
mainSection.appendChild(mainTable);



function displayLibrary() {
    for (let values of myLibrary) {
        const bookRow = document.createElement("tr");
        const titleData = document.createElement("td");
        const authorData = document.createElement("td");
        const pagesData = document.createElement("td");
        const readData = document.createElement("td");
        titleData.textContent = values[0]
        authorData.textContent = values[1]
        pagesData.textContent = values[2]
        readData.textContent = values[3]
        bookRow.appendChild(titleData)
        bookRow.appendChild(authorData)
        bookRow.appendChild(pagesData)
        bookRow.appendChild(readData)
        mainTable.appendChild(bookRow)
    }
}


window.onload = function pageRender() {
    displayLibrary();
}