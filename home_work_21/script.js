// 1)Создайте функцию delayedTask, которая возвращает промис.
// Функция delayedTask должна принимать два аргумента: taskName (название задачи) и delay (задержка в миллисекундах).
// Внутри функции, используйте setTimeout для задержки выполнения задачи на указанное количество миллисекунд.
// После задержки, функция должна разрешить промис с сообщением, содержащим название задачи и время выполнения.
function delayedTask(taskName,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`task name: ${taskName} milisikundi: ${delay}`)
        },delay)
    })
}
delayedTask("Hello world", 5000).then((message)=>console.log(message)).catch((err)=>console.log(err));
// 2)Задача: Асинхронная обработка массива данных

// Ваша задача состоит в том, чтобы создать функцию processArray, которая будет принимать массив чисел и возвращать новый массив с результатами асинхронной обработки каждого элемента исходного массива.

// Создайте функцию processArray, которая принимает массив arr в качестве аргумента.
// Внутри функции, создайте новый массив results, который будет содержать результаты асинхронной обработки элементов исходного массива.
// Используйте метод map для итерации по каждому элементу массива arr.
// Для каждого элемента массива, создайте новый промис, который будет имитировать асинхронную обработку. Внутри промиса, используйте setTimeout, чтобы задержать выполнение обработки на случайное время (например, от 1 до 3 секунд).
// В функции обратного вызова промиса, разрешите промис с результатом обработки элемента массива.
// Соберите все промисы в массив results и возвращайте его из функции processArray.
let oldArray = [1,2,3,4,5];
function processArray(arr){
    let results = [];
   let altresult =  arr.map((elem,ind,arr)=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        return resolve(elem) 
        },1000*((Math.random()*3)+1))
       
        }
        )
         
   }
  
   )
   results.push(altresult)

Promise.all(results).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});

}
processArray(oldArray)