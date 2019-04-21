'use strict';
const url = 'http://localhost:3000/students';
const generateTable = (name, surname, homeworks) = {


}
const getStudents = () =>{
    fetch(url)
    .then(responce => responce.json())
    .then(data => console.log(data))
    .catch(err => document.body.textContent = err);
}
