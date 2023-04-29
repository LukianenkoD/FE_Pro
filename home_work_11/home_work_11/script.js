// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма товара. А так же в самом конце выводится итоговая сумма и количество всех товаров.
let arrayAuto = [
    {    
    title: "BMW",
    price: "40000",
    count: "15"
    },
    {
    title: "Toyota",
    price: "20000",
    count: "13"
    },
    {
    title: "Ford",
    price: "30000",
    count: "20"
    },
    {
    title: "Chevrolet",
    price: "60000",
    count: "9"
    },
    {
    title: "Volkswagen",
    price: "30000",
    count: "13"
    },
  ];
  function caunterAuto(priceAuto, countAuto){
    let priceFunction = priceAuto.price;
    let countFunction = countAuto.count;
let caunterlist = +priceFunction*+countFunction;
return caunterlist
  }
  let arraySummProducts = [caunterAuto(arrayAuto[0],arrayAuto[0]), caunterAuto(arrayAuto[1],arrayAuto[1]), caunterAuto(arrayAuto[2],arrayAuto[2]), caunterAuto(arrayAuto[3],arrayAuto[3]), caunterAuto(arrayAuto[4],arrayAuto[4])];
console.log("итоговая сумма товаров: "+arraySummProducts);
  
function counterSummaProductsAll(parametr){
let counterSummaProductFunction = 0;
for(let i=0; i<arraySummProducts.length; i++){
counterSummaProductFunction = parametr[i]+counterSummaProductFunction
}
return counterSummaProductFunction
} 
console.log("итоговая сумма всех товаров: " + counterSummaProductsAll(arraySummProducts));


function counterQuantityProducts(parametrQuantity){
    let counterQuantityFunction = 0;
for(let i =0; i<arrayAuto.length; i++){
counterQuantityFunction=+parametrQuantity[i].count+counterQuantityFunction
}
return counterQuantityFunction
}
console.log("итоговое количество всех товаров: "+counterQuantityProducts(arrayAuto));  
const ul = document.createElement("ul");
document.body.append(ul);

function list(parametrList){
    let list2 = document.createElement("li");
    list2.innerText = parametrList.title;
    ul.append(list2);
    let list = document.createElement("li");
    list.innerText = parametrList.price;
    ul.append(list);
    let list1 = document.createElement("li");
    list1.innerText = parametrList.count;
    ul.append(list1);
}
list(arrayAuto[0]);
  ul.append("итоговая сумма товара: "+caunterAuto(arrayAuto[0],arrayAuto[0]));
  list(arrayAuto[1]);
  ul.append("итоговая сумма товара: "+caunterAuto(arrayAuto[1],arrayAuto[1]));
  list(arrayAuto[2]);
  ul.append("итоговая сумма товара: "+caunterAuto(arrayAuto[2],arrayAuto[2]));
  list(arrayAuto[3]);
  ul.append("итоговая сумма товара: "+caunterAuto(arrayAuto[3],arrayAuto[3]));
  list(arrayAuto[4]);
  ul.append("итоговая сумма товара: "+caunterAuto(arrayAuto[4],arrayAuto[4]));



const div1 = document.createElement("div");
document.body.append(div1);
div1.append("итоговая сумма всех товаров: " + counterSummaProductsAll(arraySummProducts));
div1.append(" итоговое количество всех товаров: "+counterQuantityProducts(arrayAuto));
// 2)Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):
let table = document.createElement("table");

let tr = document.createElement("tr");

let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");
let tr3 = document.createElement("tr");
let tr4 = document.createElement("tr");
let arraHeader =["No.","Full Name", "Position", "Salary"];
let arraOne =["1","Bill Gates", "Founder Microsoft", "$1000"];
let arraTwo =["2","Steve Jobs", "Founder Apple", "$1200"];
let arraThree =["3","Larry Page", "Founder Google", "$1100"];
let arraFour =["4","Mark Zukerberg", "Founder Facebook", "$1300"];
for(let i =0; i<arraHeader.length; i++){
  let td = document.createElement("td");
  td.style.cssText = "border:1px solid black;  border-collapse: collapse"; 
  td.innerText = arraHeader[i];
  tr.append(td);
}
for(let i =0; i<arraOne.length; i++){
  let td1 = document.createElement("td");
  td1.style.cssText = "border:1px solid black"; 
  td1.innerText = arraOne[i];
  tr1.append(td1);
}
for(let i =0; i<arraOne.length; i++){
  let td2 = document.createElement("td");
  td2.style.cssText = "border:1px solid black"; 
  td2.innerText = arraTwo[i];
  tr2.append(td2);
}
for(let i =0; i<arraOne.length; i++){
  let td3 = document.createElement("td");
  td3.style.cssText = "border:1px solid black"; 
  td3.innerText = arraThree[i];
  tr3.append(td3);
}
for(let i =0; i<arraOne.length; i++){
  let td4 = document.createElement("td");
  td4.style.cssText = "border:1px solid black"; 
  td4.innerText = arraFour[i];
  tr4.append(td4);
}

table.append(tr);
table.append(tr1);
table.append(tr2);
table.append(tr3);
table.append(tr4);
table.style.cssText = "border:1px solid black;  border-collapse: collapse";
document.body.append(table);
// 3)Дан массив из объектов, в котором хранятся породы собак и их возраст.Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.
let arrayDog = [
  {
    breed: "golden retriever",
    age: 7,
  },
  {
    breed: "labrador retriever",
    age: 4,
  },
  {
    breed: "french bulldog",
    age: 12,
  },
  {
    breed: "beagle",
    age: 6,
  },
  {
    breed: "german shepherd dog",
    age: 2,
  },
  {
    breed: "poodle",
    age: 3,
  },
  {
    breed: "bulldog",
    age: 4,
  },
];
let div = document.createElement('div');
for(let i=0; i<arrayDog.length;i++){
  let paragrarh = document.createElement("p");
  paragrarh.innerText = arrayDog[i].breed+"'s"+' age is: '+arrayDog[i].age;
 div.append(paragrarh);

}
document.body.append(div);
// 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.
let arrayFilm = [
  {
    name: "Lock, Stock and Two Smoking Barrels",
    year: 1998,
  },
  {
    name: "Gone in Sixty Seconds",
    year: 2000,
  },
  {
    name: "1+1",
    year: 2011,
  },
  {
    name: "Only old Men Are Going to Battle",
    year: 1973,
  },
  {
    name: "Titanik",
    year: 1997,
  },
]
let ol = document.createElement('ol');
for(let i=0; i<arrayFilm.length;i++){

  let li = document.createElement("li");
  li.innerText = arrayFilm[i].name+'. '+arrayFilm[i].year;
  ol.append(li);

}
document.body.append(ol);