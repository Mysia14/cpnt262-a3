//created a variable for the memes

const Meme1 = document.querySelector(".memebtn")

// created a variable for the "error"

const ErrorMeme = document.querySelector(".error")

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
                return fetch('https://api.imgflip.com/get_memes')
            })
            .then(function(response) {
                // check if response is ok
                if (!response.ok) {
                    // if not throw an error
                    throw new Error('Not 200 OK');
                }
                // return new json file
                return response.json();
            })
            .then(function(data) {
                // Any code that depends on the `data` must go in this block
                const element = document.querySelector(".meme");
            })
            // output the variable 
        let output = " ";

        // loop 
        for (let i = 0; i <= 1; i++) {
            output += `<figure> <img src=" ${data.url}" alt="Meme">
        <figcaption> Name:${data.name}.</figcaption></figure>`
        }


        //output
        element.innerHTML = `<fieldset><legend>MemGif</legend>${output}</fieldset>`;

        // An error or `reject ` from any of the above `.then()` blocks will end up here.

    }
    .catch(function(err) {
        Meme1.textContent = "Failed!"
        ErrorMeme.innerHTML = "Ops! Something went wrong"

    });

// Calling the Memes images

Meme1.addEventListener("click, PickMeme");