const library = [];
function Book(title, author, pages, releasd, status){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.releasd=releasd;
    this.status=status;
}
function addBookToLibrary(title, author, pages, released, status) {
    const newBook= new Book(title, author, pages, released, status);
    library.push(newBook);
}

addBookToLibrary("The Hobbit", "Tolkien", 295, 1937, false)
console.log(library)
