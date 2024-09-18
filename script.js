//api url
const apiUrl = 'https://www.dbooks.org/api/recent';

//fetch the api
fetch(apiUrl).then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}).then(data => {
    console.log(data["books"]);
    displayBooks(data["books"]);
}).catch(error => {
    console.error('Error:', error);
});

//Funcation creat card for book
function createCard(title, author, description, img, url) {
    //card
    const card = document.createElement('div');
    card.classList.add('card');

    const cardButton = document.createElement('a');
    cardButton.classList.add('btn');
    cardButton.classList.add('btn-primary');
    cardButton.textContent = 'Learn more';
    cardButton.href = url;

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
    console.log(description);
    if (description =='') {
        cardDescription.classList.add('d-none');
    }
    cardDescription.textContent = description;


    //image
    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img-top');
    cardImage.id = 'cover_image';
    cardImage.src = img;

    card.appendChild(cardImage);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardAuthor);
    cardBody.appendChild(cardButton);

    return card;
}


//function display book from api
function displayBooks(data) {
    const BookSection = document.getElementById("book-section");
    document.getElementById('count').innerHTML = `Number of books: ${data.length}`
    data.forEach(bookData => {
        const book = createCard(bookData.title, bookData.authors, bookData.subtitle, bookData.image, bookData.url);
        BookSection.appendChild(book);
    });
}


