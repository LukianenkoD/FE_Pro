
// 1) Создайте массив объектов, где каждый объект представляет один вопрос, возможные ответы и правильный ответ.
const quiz = [
    {
        question: "What is the capital of Ukraine?",
        answers: ["Kiev", "Odessa", "Donetsk","Luhansk"],
        correctAnswer: "Kiev"

    },
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Madrid"],
        correctAnswer: "Paris"

    },
    // {
    //     question: "What is the capital of Germany?",
    //     answers: ["Berlin", "Koln", "Munschen","Dusseldorf"],
    //     correctAnswer: "Berlin"

    // },
    
];
// 2)Сохраните этот массив в localStorage в виде JSON.
function addLocalStorage(key,array){
    const addArray = JSON.stringify(array);
    localStorage.setItem(key, addArray);
}

// 3)Загрузите вопросы из localStorage,
let information = [];
function getLocalStorage(){
    const objectLocalStorage = localStorage.getItem("massiv");
    if(objectLocalStorage){
    const objectItem = JSON.parse(objectLocalStorage);
        information=objectItem;
        addQuestion();
    }
    }

// 4) выведите их на страницу и предложите пользователю выбрать ответ на каждый вопрос.
const innerQuestion1 = document.querySelector(".first");
const innerQuestion2 = document.querySelector(".second");
const innerAntwort1 = document.querySelector(".form-check1");
const innerAntwort2 = document.querySelector(".form-check2");
const innerAntwort3 = document.querySelector(".form-check3");
const innerAntwort4 = document.querySelector(".form-check4");
const innerAntwort5 = document.querySelector(".form-check5");
const innerAntwort6 = document.querySelector(".form-check6");
const innerAntwort7 = document.querySelector(".form-check7");
const innerAntwort8 = document.querySelector(".form-check8");
const btn = document.querySelector("button");
const btnResult = document.querySelector("#btnResult");


addLocalStorage("massiv", quiz);
getLocalStorage();
function addQuestion(){
    innerQuestion1.innerHTML ="";
    information.forEach((element,index,array)=>{
        const item = document.createElement("lebel");
        innerQuestion1.innerText = `${array[0].question}`;
        innerQuestion2.innerText = `${array[1].question}`;
        addAntwort();
    })
}
function addAntwort(){
    information.forEach((product,index,array)=>{
    const item = document.createElement("p");
   
    item.innerText = `${array[0].answers[0]}`;
    innerAntwort1.innerHTML = "";   
    innerAntwort1.append(item);

    const item1 = document.createElement("p");
    item1.innerText = `${array[0].answers[1]}`;
    innerAntwort2.innerHTML = ""; 
    innerAntwort2.append(item1);

    const item2 = document.createElement("p");
    item2.innerText = `${array[0].answers[2]}`;
    innerAntwort3.innerHTML = ""; 
    innerAntwort3.append(item2);

    const item3 = document.createElement("p");
    item3.innerText = `${array[0].answers[3]}`;
    innerAntwort4.innerHTML = ""; 
    innerAntwort4.append(item3);

    const item4 = document.createElement("p");
    item4.innerText = `${array[1].answers[0]}`;
    innerAntwort5.innerHTML = ""; 
    innerAntwort5.append(item4);

    const item5 = document.createElement("p");
    item5.innerText = `${array[1].answers[1]}`;
    innerAntwort6.innerHTML = ""; 
    innerAntwort6.append(item5);

    const item6 = document.createElement("p");
    item6.innerText = `${array[1].answers[2]}`;
    innerAntwort7.innerHTML = ""; 
    innerAntwort7.append(item6);

    const item7 = document.createElement("p");
    item7.innerText = `${array[1].answers[3]}`;
    innerAntwort8.innerHTML = ""; 
    innerAntwort8.append(item7);
    })
}
btn.onclick =()=>{
    check1() 
    check2()
    alert("Correct antrorts: "+counter+" Sigrayte snova");
    localStorage.setItem("counter", counter);      
    counter=0;
} 

let counter = 0;

function check1() {
    let rad = document.getElementsByName('Radios');
    for (var i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        if(i===0){
            counter++;
        }else{
        }
        
      }
    }
  }
  function check2() {
    let rad = document.getElementsByName('exampleRadios');
    for (var i=0;i<rad.length; i++) {
      if (rad[i].checked) {
        if(i===0){
            counter++
        }else{
        
        }
        
      }
    }
  }
//   function checkResult(old,neww){
//     if(old>neww){
//         alert("Perviy ras bil luchshe")
//     }else if(old===neww){
//         alert("Vi sigrali takge")
//     }else{
//         alert("Vtoroi ras bil luchshe")
//     }
// }
// btnResult.onclick = () =>{
//     let result = localStorage.getItem("counter");
//     checkResult(result, counter);
// }
