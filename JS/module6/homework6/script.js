// const cat = document.querySelector('.categories');
// const firstItem = cat.firstElementChild;
// console.log(firstItem.firstChild);
// const cat = document.querySelector('.first__list');
// console.log(cat);
// let arrItem = document.querySelector('.item');
// arrItem.style.color='red';
// console.log(arrItem);
// let cat = document.querySelector('.item');
// console.log(cat);
// let cat = document.querySelector('.item');
// cat.classList.add(red__color)
// console.log(cat);

"use strict"
const jumbotron = document.querySelector('.jumbotron');
const titleContainer = document.createElement('div');
const mainTitle = document.createElement('h1');
const redText = document.createElement('span');
const lisContainer = document.createElement('div');
const redText1 = document.createElement('span');
titleContainer.classList.add('row','title-container');
mainTitle.classList.add('text-center');
lisContainer.classList.add('row', 'list-container');
mainTitle.textContent = 'TRIBUTE PAGE';
redText.textContent = ' DEADPULL';
words.textContent = 'WITH GREAT POWER COMES GREAT';
redText1.textContent = ' IRRESPONSIBILITY';
jumbotron.append(titleContainer);
titleContainer.append(mainTitle);
lisContainer.append(list);