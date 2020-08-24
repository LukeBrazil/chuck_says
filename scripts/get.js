function get(url) {
    // Step 1: fetch the data
    return fetch(url)
      .then(function (response) {
        // Step 2: Run the json() method from the Response
        return response.json();
      })
      .then(function (data) {
        // Step 3: Return the data from the response.json() method
        return data;
      });
  }
  

// function get(url) {
//     let url = 'https://api.chucknorris.io/jokes/random?category=dev'
//     return fetch(url)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             return data;
//         })
// };