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
// console.log("итоговая сумма товаров: "+arraySummProducts);
  
function counterSummaProductsAll(parametr){
let counterSummaProductFunction = 0;
for(let i=0; i<arraySummProducts.length; i++){
counterSummaProductFunction = parametr[i]+counterSummaProductFunction
}
return counterSummaProductFunction
} 
// console.log("итоговая сумма всех товаров: " + counterSummaProductsAll(arraySummProducts));


function counterQuantityProducts(parametrQuantity){
    let counterQuantityFunction = 0;
for(let i =0; i<arrayAuto.length; i++){
counterQuantityFunction=+parametrQuantity[i].count+counterQuantityFunction
}
return counterQuantityFunction
}
// console.log("итоговое количество всех товаров: "+counterQuantityProducts(arrayAuto));  
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

const div = document.createElement("div");
document.body.append(div);
div.append("итоговая сумма всех товаров: " + counterSummaProductsAll(arraySummProducts));
div.append(" итоговое количество всех товаров: "+counterQuantityProducts(arrayAuto));