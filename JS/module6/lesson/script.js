// function Account(login, email){
//     this.login = login;
//     this.email = email;
//     this.getInfo = function(){
//         console.log(this.email + ' ' + this.login);
//         }
// }
//     Account.prototype.getInfo = function(){
//     console.log(this.email + ' ' + this.login);
//     }
// const account = new Account('Mangozedog', 'mango@dog.woof');
// console.log(Account.prototype.getInfo);
// account.getInfo();
// let summ = '';
// function Account(string){
// this.string = string;
// }
// Account.prototype.sumAmount = function(num){
// for (let i=1; i <=num; i+=1){
    
//     summ += this.string ;
// }
// return summ; 

// }
// let el = new Account('str');
// console.log(el.sumAmount(3));
// Car.prototype.addDistance = function(distance){
//     this.distance += distance;
// }
// Car.prototype.isBroken = function(){
//     if (this.distance >=400000){
//         this.isDrive = false;
//     }
// }
class Car {
    constructor( {maxSpeed = 0 }) {
    this.speed = 0;
    this.running = false;
    this.distance = 0;
    this.maxSpeed = maxSpeed;
    }
    turnOn() {
       this.running = true;
    }
    turnOff() {
       this.running = false;
    }
    accelerate(spd) {
        if(0 <= spd && spd <= this.maxSpeed){
        this.speed = spd;}
    }
    decelerate(spd) {
       if(0 <= spd && spd <= this.maxSpeed){
         this.speed = spd;
       }
    }
    drive(hours) {
        if(this.running){
     this.distance = hours * this.speed;}
    }
    getSpecs(car){
        console.log(this.maxSpeed);
        console.log(this.speed);
        console.log(this.running);
        console.log(this.distance);
    }
}
const car = new Car({ maxSpeed: 100 });

car.turnOn();
car.drive(2);
car.getSpecs(car);
console.log(car);