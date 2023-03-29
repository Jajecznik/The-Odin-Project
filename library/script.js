const form = document.getElementById('form');
const container = document.getElementById('container');

let library = [];
let id = "";

form.addEventListener('submit', event => {
    event.preventDefault();
    addBookToLibrary();
    displayBook();
});

container.addEventListener('click', event => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('change-btn')) {
        const bookContainer = clickedElement.parentElement.parentElement;
        bookIsRead = bookContainer.childNodes[7];
        bookIsRead.innerHTML = bookIsRead.innerHTML === "Yes" ? "No" : "Yes";
    }

    if (clickedElement.classList.contains('delete-btn')) {
        const bookContainer = clickedElement.parentElement.parentElement;
        const bookId = bookContainer.getAttribute('data-id');
        library = library.filter(book => book.id !== bookId);
        bookContainer.remove();
    }
});

function Book(title, author, numberOfPages, isRead, id) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;    
    this.id = id;
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numberOfPages = document.getElementById('number-of-pages').value;
    const isRead = document.getElementById('is-read').checked;  
    id = new Date().toString();

    const book = new Book(title, author, numberOfPages, isRead, id);
    library.push(book);
    form.reset();
    
}

function displayBook() {
    const book = library.at(-1);

    // book cantainer
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');
    bookContainer.setAttribute('data-id', id);

    // title
    const labelsTitle = document.createElement('p');
    labelsTitle.classList.add('labels');
    labelsTitle.innerHTML = "TITLE";
    bookContainer.appendChild(labelsTitle);

    const pTitle = document.createElement('p');
    pTitle.classList.add('content');
    pTitle.innerHTML = book.title;
    bookContainer.appendChild(pTitle);
    
    // author
    const labelsAuthor = document.createElement('p');
    labelsAuthor.classList.add('labels');
    labelsAuthor.innerHTML = "AUTHOR";
    bookContainer.appendChild(labelsAuthor);

    const pAuthor = document.createElement('p');
    pAuthor.classList.add('content');
    pAuthor.innerHTML = book.author;
    bookContainer.appendChild(pAuthor);

    // number of pages
    const labelsNumberOfPages = document.createElement('p');
    labelsNumberOfPages.classList.add('labels');
    labelsNumberOfPages.innerText = "NUMBER OF PAGES";
    bookContainer.appendChild(labelsNumberOfPages);

    const pNumberOfPages = document.createElement('p');
    pNumberOfPages.classList.add('content');
    pNumberOfPages.innerText = book.numberOfPages;
    bookContainer.appendChild(pNumberOfPages);

    // is read
    const labelsIsRead = document.createElement('p');
    labelsIsRead.classList.add('labels');
    labelsIsRead.innerHTML = "IS READ?";
    bookContainer.appendChild(labelsIsRead);

    const pIsRead = document.createElement('p');
    pIsRead.classList.add('content');
    pIsRead.setAttribute('id', 'read');
    pIsRead.innerHTML = book.isRead ? "Yes" : "No";
    bookContainer.appendChild(pIsRead);

    // button's container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    bookContainer.appendChild(buttonsContainer);

    // change button
    const changeBtn = document.createElement('button');
    changeBtn.classList.add('change-btn');
    changeBtn.innerHTML = "Change";
    buttonsContainer.appendChild(changeBtn);

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = "Delete";
    buttonsContainer.appendChild(deleteBtn);

    container.appendChild(bookContainer);
}