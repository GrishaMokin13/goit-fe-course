// const getG = () =>{
//     fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=5874acfd11651a28c55771624f7021f4&language=en-US')
//     .then(responce => responce.json())
//     .then(data => console.log(data.genres))
// }
// getG();
// const getC = () =>{
//     fetch
// }
// const searchmovie = (query) =>{
// fetch()
// }
// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');
// const deleteAll = document.querySelector('.deleteAll');
// form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();
//     console.log(input.value);
//     form.reset();
// }

// function createItem() {
//     const item = docuent.createElement('li');
//     item.textContent = input.value;
//     list.appendChild(item);
// }
/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "";

form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
    evt.preventDefault();
    fetch(`https://api.github.com/users/${evt}`).then(responce => responce.json()).then(data => console.log(data))
}