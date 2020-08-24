'use strict';

const chuckSays = document.getElementById("chuckSays");
const refreshQuote = document.getElementById("refreshQuote");
const submitFormButton = document.getElementById("submitForm");
const defaultCategory = "dev"

// function getQuote(category) {}
const getQuote = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

    get(url).then(function (fetchResponse) {
        chuckSays.innerHTML = fetchResponse.value;
    });
}

refreshQuote.addEventListener('click', function (e) {
    e.preventDefault();
    getQuote(defaultCategory);
});

submitFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = document.getElementById("categoryInput");
    const category = userInput.value;
    getQuote(category);
});

(function () {
    getQuote(defaultCategory)
})();

// const chuckSays = document.querySelector('#chuckSays')
// const myButton = document.getElementById('button');
// const submitButton = document.getElementById('submitForm');

// const getQuote = (category) => {
//     const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
//     get(url).then(function(response) {
//         chuckSays.innerHTML = response.value;
//     })
// }


// myButton.addEventListener('click', function() {
//     get(url).then(function(response) {
//         chuckSays.innerHTML = response.value;
//     })
// })


// submitButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     const userInput = document.getElementById('categoryInput');
//     const category = userInput.value;
//     getQuote(category);

// })

// 'use-stirct'

// const chuckSays = document.querySelector('#chuckSays');

// function get() {
//     // Step 1: Fetch data
//     return fetch('https://api.chucknorris.io/jokes/random')
//     // Step 2: return Json Response
//         .then(function(response) {
//             return response.json();
//         })
//     //  Step 3: return data  
//         .then(function(data) {
//             return data;
//         })
// }



// (function() {
//     get().then(function(response) {
//         chuckSays.innerHTML = response.value;
//     })
// }) ()

// (function() {
//     getJokes().then(function(response) {
//         chuckSays.innerHTML = response.value;
//     })
// }) ();

// function get() {
//     return fetch('https://api.chucknorris.io/jokes/random')
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             return data;
//         })
// }