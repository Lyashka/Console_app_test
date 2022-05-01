const numberOfFilm = +prompt('Сколько фильмов вы уже посмотретил?', '');

const personalMoviesDB = {
    count: numberOfFilm,
    movies: {}, //пустой объект
    actors: {},
    general: [], //пустой массив
    privat: false // ; не ставится, ставится, когда объект закрылся 
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);