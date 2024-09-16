const apiUrl = 'https://freetestapi.com/api/v1/books/1';

fetch(apiUrl).then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}).then(data => {
    console.log(data);
    console.log(JSON.stringify(data));
   
}).catch(error => {
    console.error('Error:', error);
});