const chuckSays = document.querySelector('#chuckSays')
const myButton = document.getElementById('button');
const submitButton = document.getElementById('submitForm');

function getJokes() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data;
        })
}

// (function() {
//     getJokes().then(function(response) {
//         chuckSays.innerHTML = response.value;
//     })
// }) ();

myButton.addEventListener('click', function() {
    getJokes().then(function(response) {
        chuckSays.innerHTML = response.value;
    })
})


submitButton.addEventListener('submit', function() {
    event.preventDefault();
    
})

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