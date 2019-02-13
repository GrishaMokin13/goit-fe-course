let userInput;
const numbers = [];
let total = 0;
let checker
do {
    checker = prompt('Please enter a number');
    if(isNaN(checker)){
        alert('NaN');
        break;
    }
    numbers.push(Number(checker));
}
while (checker !== null);
for (let i of numbers) {
    total = total + i;
}
