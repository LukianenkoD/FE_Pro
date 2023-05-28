// Задача 2:
// Создание системы оценок
// Создайте HTML-страницу с тремя полями ввода: "Студент", "Предмет" и "Оценка".
// Под полями ввода разместите две кнопки: "Сохранить" и "Загрузить".
// Когда пользователь вводит информацию в поля и нажимает "Сохранить", вы должны создать объект JavaScript, содержащий эту информацию, и добавить этот объект в массив, который сохраняется в localStorage.
// Когда пользователь нажимает "Загрузить", вы должны извлечь массив из localStorage и вывести всю информацию о каждом студенте на странице.
const nameInput = document.querySelector("#name");
const subjectInput = document.querySelector('#subject');
const scoreInput = document.querySelector('#score');
const list = document.querySelector('#product-list');
const btnAddInformation = document.querySelector('#add');
const btnShowInformation = document.querySelector('#show');
let informations = [];

btnAddInformation.onclick = ()=>{
    const nameStudent = nameInput.value;
    const subjectStudent = subjectInput.value;
    const scoreStudent = scoreInput.value;
    addInformation(nameStudent, subjectStudent, scoreStudent);
    setArray("information", informations);
    nameInput.value = "";
    subjectInput.value = "";
    scoreInput.value = "";
}
function addInformation(name, subject, score){
    informations.push({name,subject,score});
}
function setArray(key, array){
    const newProducts = JSON.stringify(array);
    localStorage.setItem(key, newProducts);
}
btnShowInformation.onclick =()=>{
    getArray("information");
}
function getArray(){
    const objectLocalStorage = localStorage.getItem("information");
    if(objectLocalStorage){
        const objectItem = JSON.parse(objectLocalStorage);
        informations=objectItem;
        updateInformations();
    }
}
function updateInformations(){
        list.innerHTML ="";
        informations.forEach((element)=>{
            const item = document.createElement("li");
            item.innerText = `${element.name}-${element.subject}-${element.score}`;
            list.appendChild(item);
        })
    }
// Задача: Сохранение и извлечение сложного объекта
// 1)Создайте сложный объект JavaScript, который содержит различные типы данных, включая строки, числа, массивы и другие объекты. 
// 2)Преобразуйте этот объект в строку JSON и сохраните его в localStorage.
// 3)Затем извлеките эту строку JSON из localStorage, преобразуйте ее обратно в объект JavaScript и выведите содержимое объекта в консоль.

const difficultObject = {
    string: "Hallo world",
    number: 27051989,
    array: [1,2,3,4,5,6,7,8],
    object: {a:"A",b:"B",c:"C"},
    neuFunction: function showme(){console.log("Hello world")},
    null: null,
    boolean: true,
    undefined: undefined,
    inf: Infinity,
}
const newdifficultObject = JSON.stringify(difficultObject);
localStorage.setItem("object", newdifficultObject);
const dataLocalStorage = localStorage.getItem("object")
const object = JSON.parse(dataLocalStorage);
console.log(object);

