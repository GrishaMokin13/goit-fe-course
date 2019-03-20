// const Multiply = (arr,number) => arr.map(num => num * number);
// const summAllNumbers = (arr) => {
//     let numbers = 0;
//     arr.forEach(num => numbers = numbers + num)};
// const FindEvery = (arr, num) => arr.filter(number => num >= number);
// console.log(FindEvery(3,[1,2]));
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
// const Values = (arr, key) => arr.map(obj => obj[key]);
// console.log( Values(guests, "name") );

// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];
// const setGuestState = (people, time) => people.map(person => person.isActive = person.inactiveDays > time)
// console.log(setGuestState(guests, 33));
// const getActiveGuests = (people) => people.filter(el => el['isActive']===true);
// console.log(getActiveGuests(guests));
// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
// const getGuestsOlderThan = (people, age) => people.filter(el => el['age'] > age);
// console.log(getGuestsOlderThan(guests,29));
// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];
//   const findGuestById = (people, id) => people.filter(el => el['id'] === id);
//   console.log(findGuestById(guests,2));
// let arr = [ 1, 2, 3, 4, 5 ];
// let arr2 = [];
// let arr3 = [];
// const summ = arr.reduce((acc, number) => {
//     arr2.push(acc + number);
//     console.log(arr2.reduce);
//     if (number === 5){
//       return arr2.map(num => arr3.push(num));
//     }
//     else{
//         return acc + number;
//     }
// },0)
// console.log(summ);
// const getTotal = (arrr) => Object.values(arrr).reduce((acc, cur) => acc + cur ,0);
// console.log(getTotal({ apples: 25, chicken: 60, milk: 15 }));

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
  };
  
  const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
  };
  const getTotal = (arr) => Object.entries(arr).reduce((acc, cur) => cur[1] * products.cur[0] + acc ,0);
  console.log(getTotal(orderA));