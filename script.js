// ------------1--------------Найдите общие элементы(в виде массива) между двумя массивами.

let arrayOne = [1,2,3];
let arrayTwo = [4,2,1];
let arrayNew = [];
for(let i =0; i<arrayOne.length; i++){
    for(let y=0; y<arrayTwo.length; y++){
if(arrayOne[i]===arrayTwo[y]){
    arrayNew.push(arrayOne[i]);
}
    }
}

console.log(arrayNew);
// -------------2------Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
let array = [];
function number(enterNumber){
for(let i =0; i<=enterNumber; i++){

array.push(i);
}
} 
number(9);
console.log(array);
// ----------------3-----------Предыдущее задание делаем с объектом. (как ключ передаем i).
let object = {};
function number1(enterNumber1){
for(let i =0; i<=enterNumber1; i++){

object[i] = i;
}
} 
number1(8);
console.log(object);
// -----------------4-------------Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].
let array1 = [];
function numberString(enterNumber2,string){
    for(let i =0; i<enterNumber2; i++){
array1.push(string)
    }
}
numberString(3,"dog");
console.log(array1);
// -------------------5---------------Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде. Пример: “cat” => “tac”

function expand(string1){
let newString = "";
for(let i=string1.length-1; i>=0; i--){
newString= newString+string1[i];
}
return newString;
}
console.log(expand("cat"));
// --------------------6-------------------------Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
function polindrom(word){
    let newWord = "";
for(let i=word.length-1; i>=0; i--){
    newWord+=word[i];}
    if(newWord === word){
        return true;
    }else{return false}
}
console.log(polindrom("alla"));
// ------------------------7-------------------------Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром.
let arrayProduct = [
    {name: "Shoes", price: 70,},
    {name: "T-shirt", price: 60,},
    {name: "Cap", price: 50,}
];
function highPrice(parametr){
    let max = parametr[0].price;
    let objectMax = parametr[0];
    for(let i=0; i<parametr.length; i++){
      if(max<parametr[i].price){
        max=parametr[i].price;
        objectMax=parametr[i]; 
      }
    }
    return objectMax;
}
console.log(highPrice(arrayProduct));