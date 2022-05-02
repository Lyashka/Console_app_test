"use strict";
let numberOfFilm;


function start() {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотретил?', '');
    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) { // isnan проверяет если внутри 
        numberOfFilm = +prompt('Сколько фильмов вы уже посмотретил?', ''); //не число, то он возвращает правду 
    }
}
// start();

let a, b;

function remembrerMyFilms() {
    for (let i = 0; i < 2; i++) {
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');

        while ((a.length < 5 || a.length > 15) || a.length == '' || a == null) {
            a = prompt('Один из последних просмотренных фильмов?', '');
            b = prompt('На сколько оцените его?', '');

        }
        personalMoviesDB.movies[a] = b;

    }
}
// remembrerMyFilms();


function detectPersonalLevel() {
    if (numberOfFilm < 10 && numberOfFilm >= 0) {
        alert('Просмотренно довольно мало фильмов');
    } else if (numberOfFilm > 10 && numberOfFilm < 30) {
        alert('Вы классический зритель');
    } else if (numberOfFilm > 30) {
        alert('Вы истинный наркоман!');
    } else {
        alert('Упс. Произошла ошибка(');
    }
}
// detectPersonalLevel();


const personalMoviesDB = {
    count: numberOfFilm,
    movies: {}, //пустой объект
    actors: {},
    general: [], //пустой массив
    privat: false // ; не ставится, ставится, когда объект закрылся 
};

function showMyDB(hidden){
if (!hidden ){
console.log(personalMoviesDB);
}
}
showMyDB(personalMoviesDB.privat); //т.е это в параметр hidden передаем аргумент privat 


function wtiteYourGenres(){
    for (let i=1; i<=3; i++){
        const genre = prompt(`Ваш любимы жанр под номером ${i}`);
        personalMoviesDB.general[i-1]= genre; // i-1 потому что let i=1 а не i=0 (записываем по индексам в бд,
    }                                                                // а для пользователя выводим по порядку)
}
wtiteYourGenres();



// console.log(personalMoviesDB);



// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько оцените его?', '');

// if (b < 5){
//     console.log("Это плохой фильм");
//     alert(a + " Это плохой фильм");
// }else {
//     console.log("Это хороший фильм");
//     alert(a + " Это хороший фильм");
// }

// if (d < 5){
//     console.log("Это плохой фильм");
//     alert(c + " Это плохой фильм");
// }else {
//     console.log("Это хороший фильм");
//     alert(c + " Это хороший фильм");
// }
// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;

// console.log(personalMoviesDB); 