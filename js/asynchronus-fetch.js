//created a variable for the memes

const Meme1 = document.querySelector(".memebtn");

// created a variable for the "error"

const ErrorMeme = document.querySelector(".error");

// Function to fetch data

const PickMeme = function() {
    fetch('https://api.imgflip.com/get_memes')

    .then(function(response) {

        // JSON that is returned from the server will be converted to a JS object asynchronously.
        //console.log(response);
        if (!response.ok) {
            throw new Error('Not 200 OK');
        }
        return response.json();
    })

    // load the Memes images

    .then(function(data) {
        console.log(data.data.memes[1])
            // Created a variable for the a random element
        const element = document.querySelector(".meme");
        let output = " ";
        const randomNumber = Math.floor(Math.random() * 100);

        // loop

        output = `<figure> <img src=" ${data.data.memes[1].url}" alt="${data.data.memes[1].name}">
        <figcaption> :${data.data.memes[1].name}.</figcaption></figure>`;

        //output
        element.innerHTML = `<fieldset><legend>MemGif</legend>${output}</fieldset>`;

    })

    randomNumber()
        // An error or `reject ` from any of the above `.then()` blocks will end up here.
        .catch(function(err) {
            Meme1.textContent = "Failed!"
            ErrorMeme.innerHTML = "Ops! Something went wrong"

        });

    // Calling the Memes images
}

Meme1.addEventListener("click", PickMeme);