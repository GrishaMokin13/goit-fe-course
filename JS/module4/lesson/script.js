// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
// user.mood = 'happy';
// user.hobby = 'javascript';
// delete user.premium;
// for (key in user){
//     console.log(key + "=" + user[key])
// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
// };
// let max = Object.values(tasksCompleted)[1];
// for(let el of Object.values(tasksCompleted)){
//     if (max < el){}
//     else{max = el}
// }////////////////////////////////////////////////////////////////////
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
//   let i
// const getAllPropValues = (arr, prop) => {
// while ( i = 0; i <= users.length - 1; i = i + 1{
// arr1.push(users[i].prop)
// }
// console.log(arr1);
// }
//////////////////////////////////////////////////////////////////
// let total
// const countTotalSalary = () =>
// while(let a = 0; a <= arguments.length; a +=1){
// total +=
// }
// let maxn;
// let string = prompt('str pls');
// let split = [];
// const max = function(arr){
// maxn = arr[0]
// for (let i=0; i <= arr.length; i +=1){
// if (arr[i] > maxn){
//   maxn = arr[i];
// }
// }
// return maxn
// }
// split = string.split(" ")
// alert(max(split));
// const numbers = [12, 15, 25, 37, 41];
// let min = numbers[0];
// let max = numbers[ numbers.length - 1 ];
// let num = prompt(`enter num between ${min} and ${max}`);
// if (Number(num)=== NaN){
//   alert('Lohoc eto ne chyslo');
// }
// else if (numbers.includes(Number(num))===true){
//   alert('Ugadalii');
// }
// else{
//   alert('NeUgadali');
// }/////////////////////////////////////////////////////////////
// const uniqueNumbers  = [2, 1, 4, 9];
// let a;
// let c = [];
// const addUniqueNumbers =  (...rest) => {
//   a = rest.length;
//   c = rest;
//   for(let b of uniqueNumbers){
//     for(let i = 0; i <= a; i += 1){
//       if(b===c[i]){
//         uniqueNumbers.push(c[i]);
//       }
//     }
//   }

// }
// addUniqueNumbers(2, 3, 3, 2, 90);
// console.log(uniqueNumbers);
/////////////////////////////////////////////
const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];
const getAllPropValues = (arr, prop) =>{
const proparr = [];
// for(let i = 0; i <= arr.length - 1; i +=1){
//   if (arr[i].indexOf[prop] >= 0){
// proparr.push(arr[i].prop)
//   } 
// }
for (const el of arr) {
  if (el.indexOf[prop] >= 0){
    proparr.push(el.prop)}
}
return proparr;
}
console.log(getAllPropValues(users, 'name'));

// const countProps = (obj) => Object.values(obj).length
// console.log(countProps({a: 1, b: 3, c: 'hello'}))
// const isObjectEmpty = (obj) => {if(Object.values(obj).length === 0){return true} else {return false}}
// console.log(isObjectEmpty({a: 1, b: 3, c: 'hello'}))

// const countTotalSalary = (salaries) => {
//   let arr = Object.values(salaries); 
//   let summ;
//   for (){
     
//   }
// }
// console.log(countTotalSalary({a: 1, b: 3}))