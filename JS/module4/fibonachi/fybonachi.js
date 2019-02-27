let a = [1,1];
let chyslo;
let b = +prompt('Enter a number pls');
for(let i = 0; i < (b-2) ; i += 1){
chyslo= a[a.length-1] + a[a.length-2]
a.push(chyslo);
}
if(b === 1){
    a.pop();
    alert(a);
}
else if(b === 0){
    a.pop();
    a.pop();
}
else if(b<1 && b!==0){
}
else{
    alert(a);
}
// let prmpt = prompt('Ввведіть число');
// let fib = (max) => {
//   let fibNum = 1;
//   let first = 1;
//   let second = 1;
//   let arr = [1];
//   do {
//     arr.push(fibNum);
//     fibNum = first + second;
//     first = second;
//     second = fibNum;
//   } while (fibNum <= max);

//   console.log(arr);
//   return;
// }


// fib(prmpt);