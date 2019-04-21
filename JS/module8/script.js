// document.addEventListener('DOMContentLoaded', () => {
//     const formGeneratetable = document.querySelector('form');
//     const inputTr = document.querySelector('.trInput');
//     const inputTd = document.querySelector('.tdInput');
//     let countTr;
//     let countTd;
    
//     const table = document.querySelector('table');
//     const input__color = document.querySelector('.input__color');
//     const removeb = document.querySelector('.removeTableBtn');
//     formGeneratetable.addEventListener('submit', onSubmit)

//     function onSubmit(e){
//      e.preventDefault();
//     countTr = inputTr.value;
//     countTd = inputTd.value;
//     generatetable(countTr, countTd);
//      formGeneratetable.reset();
//     }
//     function generatetable(trr, tdd){
//         console.log(trr);
//         console.log(tdd);
//         const tbody = document.createElement('tbody');
//         for(let i= 0; i<trr; i++){
//              const tr = document.createElement('tr');
//              for(let j = 0; j<tdd; j++){
//                  const td = document.createElement('td');
//                  tr.appendChild(td);
//              }
//              tbody.appendChild(tr);
//         }
//         table.appendChild(tbody);

//     }
//     table.addEventListener('mousemove', fnAddColor);
//     function fnAddColor(e){
//         if (e.target.nodename = 'TD'){
//             e.target.style.backgroundColor = input__color.value;
//         }
//     }
//    removeb.addEventListener('click', () => table.remove());
   
// });
// window.addEventListener('scroll', () => console.log('scrolling!'));
// console.log('pageYOffset: ', pageXOffset);
const inputlist = document.querySelector('.input-list');
inputlist.addEventListener('focusout', e =>{
    if(e.target.dataset.length == e.target.value.length){
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
    }else{
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
    }
})