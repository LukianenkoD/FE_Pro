  // 1)  Превратите массив чисел в длинную строку, состоящую из всех этих чисел.
// Пример: [1,2,3] => "1,2,3"
let arrayNumbers = [1,2,3,4,5,6];
console.log('" 1 задача: '+ arrayNumbers.toString()+'"');
console.log('" 1 задача: '+arrayNumbers+""+'"');

// 2)Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
let arrayNeu =[];
const summ = voters.reduce((acc,current)=>{
    if(current.voted===true){
        arrayNeu.push(current.voted);
        return arrayNeu.length;
    }else{
        return acc;
    }
},0); 
console.log("2 задача: "+summ+" peoples");
// 3)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let sum = 0;
let wishlistNeu = [];
wishlist.forEach((element,index,array)=>{
    sum += element.price;
    wishlistNeu.push(element.title);
})
console.log(sum,wishlistNeu);


// 4) У вас есть массив объектов, представляющих список клиентов с их заказами. Каждый объект имеет свойства name и orders, где orders - это массив строк, представляющих товары, которые заказал клиент. Ваша задача - создать новый массив объектов, где каждый объект имеет свойства name и totalOrders, где totalOrders - общее количество товаров, заказанных клиентом.
const arrayObject =[
    {name:'Dima', oders:["car","bike","ball"]},
    {name:'Ivan', oders:["table","chair",]},
    {name:'Myra', oders:["sofa","komod",]},
    {name:'Maryna', oders:["book","pencil","lamp",]},];

    let neuArrayObjecdt = arrayObject.map((element,index,array)=>{
        element.totalOders = element.oders.length;
        delete element.oders;

        })
    console.log(arrayObject);
// 5)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершенолетних и несовершеннолетних людей.
const arrayObjectPeople =[
    {name:'Dima', age:33},
    {name:'Ivan', age:3},
    {name:'Myra', age:3},
    {name:'Maryna', age:28},
    {name:'Luda', age:53},
];
    let neuArrayObjecdtAdult = [];
    let neuArrayObjecdtChildren = [];
    arrayObjectPeople.forEach((elem,index,arr)=>{
        if(elem.age>18){
           neuArrayObjecdtAdult.push(elem.age);
        }else{
            neuArrayObjecdtChildren.push(elem.age);
        }
    }
    );
    console.log(`Adult:${neuArrayObjecdtAdult.length}`);
    console.log(`Children:${neuArrayObjecdtChildren.length}`);
    
    

// 6)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.
const arrayObjectPeoples =[
        {name:'Dima', age:33},
        {name:'Ivan', age:3},
        {name:'Myra', age:3},
        {name:'Maryna', age:28},
        {name:'Luda', age:53},];
        let neuArrayObjectPeoples =[];
        arrayObjectPeoples.forEach((elem,index,arr)=>{
                if(elem.age>30){
                    neuArrayObjectPeoples.push(elem);
                }
            });
            
        console.log(neuArrayObjectPeoples);

