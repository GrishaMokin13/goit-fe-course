// const time = document.querySelector('.time');
// const start = document.querySelector('.start');
// const stop = document.querySelector('.stop');
// let counter = 0;
// let timeid;
// let bool = false;
// const st = () =>
// {if (bool === false)   {
//    timeid = setInterval(() => {
    
//     counter++;
//     bool = true;
//     time.textContent = counter;
//     },0);}
// }
// const sp = () => {
//     clearInterval(timeid);
//     time.textContent = 0;
//     counter = 0;
//     bool = false;
// }
// start.addEventListener('click', st);
// // stop.addEventListener('click', sp);
// // 'use strict';
// // let secc = document.querySelector('.seconds');
// // let minn = document.querySelector('.minutes');
// // let hourss = document.querySelector('.hours');
// // let dayess = document.querySelector('.days');
// // let deadline = new Date(2019, 5, 1);
// // let today = Date.now();
// // let result = deadline - today;
// // let secs = Number.parseInt(result/1000) %60;
// // let mins = Number.parseInt(result/1000/ 60) %60;
// // let hours = Number.parseInt(result/1000/ 60/ 60) %60;
// // let days = Number.parseInt(result/1000/ 60/ 60/ 24) % 356;

// // const timer = () =>{
// // let today = Date.now();
// // let result = deadline - today;
// // let secs = Number.parseInt(result/1000) %60;
// // let mins = Number.parseInt(result/1000/ 60) %60;
// // let hours = Number.parseInt(result/1000/ 60/ 60) %24;
// // let days = Number.parseInt(result/1000/ 60/ 60/ 24) % 356;
// // secc.textContent = secs;
// // minn.textContent = mins;
// // hourss.textContent = hours;
// // dayess.textContent = days;
// // }
// // setInterval(timer, 1000);
// //   let tim = null;
// //   let i = -1;
// //   const colors = [
// //     "red",
// //     "orange",
// //     "yellow",
// //     "green",
// //     "blue",
// //     "purple"
// //   ];
// //   const header = document.querySelector('header');
// //     tim = setInterval(() => {
// //         i++;
// //         header.style.backgroundColor = colors[i % colors.length];
// //     }
// //     // Math.round(Math.random() * (colors.length - 1))
// //     ,70)

// const generateUI = arr => {
//   console.log(arr);
//   const list = document.createElement('ul');
//   arr.map(el => {
//     const item = document.createElement('li');

//     const name = document.createElement('h2');
//     name.textContent = el.title;

//     const image = document.createElement('img');
//     image.setAttribute('src', https://image.tmdb.org/t/p/w500/${el.backdrop_path});

//     item.append(name, image);
//     list.appendChild(item);
//     document.body.appendChild(list);
//   });
// };

// fetch(
//   'https://api.themoviedb.org/3/movie/popular?api_key=5874acfd11651a28c55771624f7021f4&language=en-US',
// )
//   .then(response => response.json())
//   .then(data => generateUI(data.results));