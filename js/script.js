/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// let promoAdv = document.querySelector('.promo__adv');
let promoAdv = document.querySelectorAll('.promo__adv img');
let promoGenre = document.querySelector('.promo__genre');
let promoBg = document.querySelector('.promo__bg');
let promoList = document.querySelector('.promo__interactive-list');
let promoListItems = document.querySelectorAll('.promo__interactive-list li');


promoAdv.forEach(item => {
    item.remove();
});
promoGenre.textContent = 'Drama';
promoBg.style.backgroundImage = "url('img/bg.jpg')";

// promoListItems.forEach(item => {
//     console.log(item.textContent);
// });

// for (let i = 0; i < movieDB.movies.length; i++) {
//     promoListItems[i].textContent = [i + 1] + " " + movieDB.movies[i];
// }

//Author's solution
promoList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
promoList.innerHTML += `
    <li class="promo__interactive-item">
        ${i + 1} ${film}
        <div class="delete"></div>
    </li>
`;
});