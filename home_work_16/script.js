// 1) Напишите функцию printWithDelay, которая принимает в качестве аргумента массив строк. Функция должна выводить каждую строку из массива на консоль с задержкой в 1 секунду между каждой строкой.
let arrayStringNeu1 = ["Dima","Ivan","Mira","Maryna","Ludmila"];

function printWithDelay(arrayString){
        let i = 0;
 setTimeout(function go(){if(arrayString.length-1>i){setTimeout(go,1000);
    }
    console.log(arrayString[i++]);
},1000);
}    
printWithDelay(arrayStringNeu1);
// 2)Напишите функцию getSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать метод map для возведения в квадрат каждого числа в массиве и возвращать новый массив, содержащий возведенные в квадрат числа.
const numbers = [2,5,7,11];
let getSquares = numbers.map((element)=>{
    return element**2;
});
console.log(numbers, getSquares);
// 3)Напишите функцию sumEvenSquares, которая принимает в качестве аргумента массив чисел. Функция должна использовать методы map и filter  и вернуть сумму оставшихся четных чисел.
const nums = [1,2,3,4,5,6,7,8];
const even = nums.filter((element)=>element%2===0);
function sumEvenSquares(num){
    let sum = 0;
    for(let i=0; i<num.length;i++){
        sum+=num[i];
    }
    return sum;
};
console.log(even+' sum: '+sumEvenSquares(even));
// 4)Напишите функцию с именем delayedUpperCase, которая принимает в качестве аргумента массив строк. Функция должна использовать метод forEach для перебора каждой строки в массиве и выводить на консоль версию строки в верхнем регистре с задержкой в 2 секунды.

let arrayStringNeu = ["a","b","c","d","e"];
function delayedUpperCase(argument){
    let i = 0;
    argument.forEach((element,index,array)=>{
        if(index>=i){
            setTimeout(()=>{console.log(element.toUpperCase());
            },5000);
        }
    });
}
delayedUpperCase(arrayStringNeu);

// 5)Напишите функцию countDown, принимающую в качестве аргумента число. Функция должна использовать метод setTimeout для печати чисел от заданного числа до 1, с задержкой в 1 секунду между каждым числом.

function countDown(from,to){
    let current = to;
    setTimeout(function go(){if(current>from){setTimeout(go,1000);
    }
    console.log(current--);
},1000);
}
countDown(1,8);
// 6)Напишите функцию filterNamesByLetter, которая принимает в качестве аргументов массив имен и букву. Функция должна использовать метод filter, чтобы вернуть новый массив, содержащий только те имена из исходного массива, которые начинаются с заданной буквы.
let arrayStringNames = ["Dima","Ivan","Mira","Maryna","Ludmila","Diana"];
function filterNamesByLetter(array,letter){
    const chooseLetterName = array.filter((element,index,array)=>element[0]===letter);
    console.log(chooseLetterName);
}
filterNamesByLetter(arrayStringNames,"M");
