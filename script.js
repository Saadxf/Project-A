//api url
const apiUrl = 'https://freetestapi.com/api/v1/books';

//fetch the api
fetch(apiUrl).then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}).then(data => {
    console.log(data);
    displayBooks(data);
}).catch(error => {
    console.error('Error:', error);
});

//Funcation creat card for book
function createCard(title, author, description, img) {
    //card
    const card = document.createElement('div');
    card.classList.add('card');

    //card-body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    //Title
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.id = 'title';
    cardTitle.textContent = title;

    //Author
    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('card-text');
    cardAuthor.id = 'author';
    cardAuthor.textContent = author;

    //description
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-text');
    cardDescription.id = 'description';
    cardDescription.textContent = description;

    //image
    const cardImage = document.createElement('img');
    cardImage.classList.add('cover_image');
    cardImage.id = 'cover_image';
    cardImage.src = img;

    card.appendChild(cardImage);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardAuthor);

    return card;
}


//function display book from api
function displayBooks(data) {
    const BookSection = document.getElementById("book-section");
    document.getElementById('count').innerHTML = `Number of books: ${data.length}`
    data.forEach(bookData => {
        const book = createCard(bookData.title, bookData.author, bookData.description, bookData.cover_image);
        BookSection.appendChild(book);
    });
}
