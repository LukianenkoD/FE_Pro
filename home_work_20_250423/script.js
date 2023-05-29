const name1 = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const form = document.querySelector(".form");

const form2 = document.querySelector(".form2");
const searchInput = document.querySelector("#search");

const section = document.querySelector("#productsList");
const noProduct = document.createElement("h1");

const deleteBtn = document.querySelector("#deleteProducts");
const sumBtn = document.querySelector("#sumProducts");
const sumProductsParagraph = document.querySelector("#sumProductsParagraph");
const containerParagraph = document.querySelector(".container-paragraph");

noProduct.innerText = "No products";
noProduct.style.textAlign = "center";
section.append(noProduct);

let arrayProduct = [];

form.onsubmit = (e) =>{
    e.preventDefault();
   arrayProduct.push({title:name1.value, price:priceInput.value});
//    console.log(arrayProduct);
   name1.value = ""; 
   priceInput.value = "";
//    console.log(arrayProduct);
   newProducts();
};
function createNod (title,price, index){
const div = document.createElement("div");
const h1 = document.createElement("h2");
h1.innerText = title;
const h2 = document.createElement("h2");
h2.innerText = price;

const btn = closeBtn();
btn.onclick = () =>{
    // section.removeChild(div);
    const result = [];
    for(let i =0; i<arrayProduct.length;i++){
        if(i !== index){
        result.push(arrayProduct[i]);
        };
        
    };
    arrayProduct=result;
    newProducts();
    if(arrayProduct.length===0){
        section.append(noProduct);
    }
// console.log(arrayProduct);
}

div.append(h1, h2, btn);

div.classList.add("productCar");
div.onmouseover = () =>{
    btn.style.opacity = "1";
};

div.onmouseleave = () =>{
    btn.style.opacity = "0";
};
section.append(div);
}

function newProducts(){
section.innerHTML="";
for(let i =0; i<arrayProduct.length; i++){
    createNod(arrayProduct[i].title, arrayProduct[i].price,i);
   }
 };

function closeBtn(){
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.classList.add("close");
    return btn;
}

form2.onsubmit = (e) => {
    e.preventDefault();
    section.innerHTML="";
for(let i =0; i<arrayProduct.length; i++){
    if(arrayProduct[i].title === searchInput.value){
    createNod(arrayProduct[i].title, arrayProduct[i].price,i);
}
   }
}

const sortBtn = document.querySelector("#sortBtn");
sortBtn.onclick = () =>{
    arrayProduct.sort((a,b)=>a.price-b.price);
    newProducts();
};

sumBtn.onclick = () =>{
    let counter = 0;
    for(let i = 0; i<arrayProduct.length; i++){
        counter= counter+(+arrayProduct[i].price);
    };
    sumProductsParagraph.innerText = counter;
    let text = " Sum of products:"
    sumProductsParagraph.innerText = text+counter;
    containerParagraph.classList.add("productCar");
    return sumProductsParagraph;
}

deleteBtn.onclick = () =>{
    const result = [];
    arrayProduct=result;
    newProducts();
    if(arrayProduct.length===0){
        section.append(noProduct);
    }
  
};
// Создайте поле ввода(input) и застилизуйте.
// Добавьте к полю ввода слушатель события 'keyup'.
// Когда пользователь набирает текст, отобразите вводимое значение в элементе paragraph или span под полем ввода.
// const input = document.querySelector("#new");

// input.addEventListener('keyup', e = ()=>{

// const div = document.createElement("div");
//     const p = document.createElement("p");
    
//     div.append(p);
//     document.body.append(div);
//     p.innerText = input;
    
//     });

// const textInput = document.getElementById('newInput');
// const textOutput = document.getElementById('newOutput');
    
// newInput.addEventListener('keyup', e => {
//     newOutput.innerText = newInput.value;
// })
    // let array = [5,6,7];
    // console.log(array);
    // for (let i =0; i<array.length; i++){
    //     array = [5,7];
        
    // }
    // console.log(array);
    