// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success!");
//     }, 2000);
//   });
//   console.log(promise);
// const distance = 1000
// const car = (name, speed) => new Promise(resolve =>
//     setTimeout(()=>{
//         resolve(`${name} crossed the finish line!`);
//     }, distance/speed * 1000));
//     const fiat = car('fiat', 220);
//     fiat.then(data => console.log(data));
//     const bmw = car('bmv', 340);
//     bmw.then(data => console.log(data));
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
*/

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple"
  ];
  let tim = null;
  let bool = false;
  let i = -1;
const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
start.addEventListener('click', () => {
    if(!bool) {
    tim = setInterval(() => {
        i++;
        document.body.style.backgroundColor = colors[i % colors.length];
    }
    // Math.round(Math.random() * (colors.length - 1))
    ,70)
    bool = true;
}
})
stop.addEventListener('click', () =>{
    clearInterval(tim);
    bool = false;
} )
