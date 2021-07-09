  // Save the Main element in a variable
const $main = $("main");

// Asynchronous Request the data from our JSON file
$.ajax("./json/data.json")
  // specify what to do with data once request is completed (... and then...)
  .then((data) => {
    // Loop over the data since it is an array
    data.forEach((movie) => {
      // create a new div to hold the movie
      const $div = $("<div>");
      // generate the html we want in each div with that movies data
      $div.html(`<h2 class="movie-title">${movie.title}</h2>
        <h3 class="movie-release">${movie.release_year}</h3>
        <img class="movie-image" src="${movie.image}"/>`);
      // append to the main tag
      $main.append($div);
    });
  });