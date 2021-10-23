fetch('https://animechan.vercel.app/api/random')

.then(function(response) {
        // JSON that is returned from the server must be converted to a JS object asynchronously.


        console.log(response);
        if (!response.ok) {
            throw new Error('Not 200 OK');
        }
        return response.json();
    })
    .then(function(data) {
        // Any code that depends on the `data` must go in this block

        const element = document.querySelector(".anime");

        element.innerHTML = `
        <figure>
        <img src=" ${data.url}" alt="anime image">
        <figcaption>${data.fileSize} bytes os data.</figcaption>figure>`;
        console.log(data);
    })
    .catch(function(err) {
        // An error or `reject` from any of the above `.then()` blocks will end up here.
        console.log(err);
    });

//const button = document.querySelector("button").addEventListener ("click, fetch")