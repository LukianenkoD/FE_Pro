// Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на
// какую-либо кнопку число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.
const input = document.querySelector('#title');

const btnDecrement = document.querySelector('#decrement');
const btnIncrement = document.querySelector('#increment');
let curValue = localStorage.getItem("number");
input.innerText = curValue;
btnIncrement.onclick =()=>{
    curValue++;
    localStorage.setItem("number", curValue);
    input.innerText = localStorage.getItem("number");
}
btnDecrement.onclick =()=>{
    curValue--;
    localStorage.setItem("number", curValue);
    input.innerText = localStorage.getItem("number");
}