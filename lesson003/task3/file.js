const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB = {
count :  numberOfFilms,
movies : {},
actors : {},
genres : [],
privat : Boolean(numberOfFilms == -1)
};
       
const lastMovie = prompt('One of the last movies you watched?', ''),
filmScore = prompt('How much would you rate it?', '');
       
personalMovieDB.movies[lastMovie] = filmScore;
       
console.log(numberOfFilms);
console.log(personalMovieDB);