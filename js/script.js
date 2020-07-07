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
let promoAdv = document.querySelectorAll('.promo__adv img'),
    promoGenre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    promoList = document.querySelector('.promo__interactive-list'),
    promoListItems = document.querySelectorAll('.promo__interactive-list li'),
    form = document.querySelector('.add'),
    enterFilm = form.querySelector('.adding__input'),
    confirmFilm = form.querySelector('.add button');



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


confirmFilm.addEventListener('click', function() {
    //input value

    
    promoList.innerHTML += `
    <li class="promo__interactive-item">
        ${}//input value
        <div class="delete"></div>
    </li>
    `;
    
    movieDB.movies.sort();
});