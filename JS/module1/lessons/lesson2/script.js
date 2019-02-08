// let name = prompt('Enter name');
// console.log(name);
// let num = 1/0;
// console.log(num);
// let random = Math.random() * 10 + 20;
// let round = Math.round(random);
// console.log(round);
// console.log(typeof num);
// let day = 3;
// let month = 12;
// let year = 2004;
// console.log('I was born in ' + day + '/' + month + '/' + year);
// console.log(`I was born in ${day}/${month}/${year}`);
// let n = +prompt('enter');
// if (n % 1 === 0 && n > 0 && n < 12){
// if (n < 3 || n === 12) {
//     console.log('winter')
// }
// else if (n < 6 && n > 2) {
//     console.log('spring')
// }
// else if (n < 9 && n > 5){
// console.log('summer')}
// else if (n < 12 && n > 8){
// console.log('spring')}
// }
let numb = +prompt();
// switch(!isNaN(numb)){
// case true:
// console.log('Num');
// break;
// default:
// console.log('NaN');
//  }
if (!isNaN(numb)){
    console.log('Num');
}
else
    console.log('NaN');

