const library = [];

function Book(title, author, pages, released, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.released = released;
    this.status = status;
    this.id = crypto.randomUUID();
}


Book.prototype.toggleRead = function() {
    this.status = !this.status;
};

function addBookToLibrary(title, author, pages, released, status) {
    const newBook = new Book(title, author, pages, released, status);
    library.push(newBook);
}


addBookToLibrary("The Hobbit", "Tolkien", 295, 1937, false);
addBookToLibrary("Animal Farm", "George Orwell", 160, 1945, true);
addBookToLibrary("1984", "George Orwell", 500, 1948, false);

const container = document.getElementById("library-container");

function displayBooks() {

    container.innerHTML = "";

    library.forEach(function(book) {

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        bookDiv.dataset.id = book.id;

        const info = document.createElement("p");
        info.textContent =
        "Title: " + book.title +
        " | Author: " + book.author +
        " | Pages: " + book.pages +
        " | Released: " + book.released +
        " | Read: " + book.status;

       
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", function() {
            const index = library.findIndex(b => b.id === book.id);
            library.splice(index, 1);
            displayBooks();
        });

       
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";

        toggleBtn.addEventListener("click", function() {
            book.toggleRead();
            displayBooks();
        });

        bookDiv.appendChild(info);
        bookDiv.appendChild(removeBtn);
        bookDiv.appendChild(toggleBtn);

        container.appendChild(bookDiv);

    });

}

displayBooks();

const newBookBtn = document.getElementById("button");
const form = document.getElementById("bookform");

newBookBtn.addEventListener("click", function() {
    form.style.display = "block";
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const released = document.getElementById("released").value;
    const status = document.getElementById("status").checked;

    addBookToLibrary(title, author, pages, released, status);

    displayBooks();

    form.reset();

});
