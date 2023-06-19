// Создать страницу на свободную тему. Все данные нужно брать по API, которые можете взять из  https://jsonplaceholder.typicode.com/ 

// Изучите какие данные предоставляет вам этот API и по максимуму используйте их.


// Помимо этого нужно добавить все соответствующие стили для красивого отображения элементов, а так же обязательно ваша страница должна быть адаптивной.



async function informUsers(id){
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok){
        throw new Error('Такого пользователя нет')
    }
        const dataUser = await response.json();
       
       
    return [dataUser.name, dataUser.email, dataUser.phone,] ;
} catch{
    console.log(e.message);
}
}
async function photos(id){
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    if(!response.ok){
        throw new Error('Такого photo нет')
    }
        const dataUser = await response.json();
       
       
    return dataUser.url ;
    
} catch{
    console.log(e.message);
}
}
const inputIdOne = document.querySelector('#input-id-1');
const formOne = document.querySelector(".form-one");
const imgFormOne = document.querySelector("#img-form-one");
formOne.onsubmit = async (e)=>{
    e.preventDefault();
    
    const nummer = inputIdOne.value;
    const object = await photos(nummer);
    imgFormOne.src = object;
    inputIdOne.value ="";
    console.log(object);
}  


function addData(argument){
    const list = document. querySelector('#list');
    list.innerHTML = "";
    console.log(argument);
    argument.forEach(elem =>{
        const li = document.createElement('li');
        li.innerText = elem;
        list.append(li);
        })
           } 

const form = document.querySelector('form');
const inputId = document.querySelector('#input-id')
 form.onsubmit = async (e)=>{
        e.preventDefault();
        
        const nummer = inputId.value;
        const object = await informUsers(nummer);
        addData(object);
        inputId.value ="";
 }   

const buttonDeletInform = document.querySelector("#delet-inform");

buttonDeletInform.onclick = ()=>{
    list.innerHTML="";
} 

const buttonDeletePhotos = document.querySelector("#delete-photos");

buttonDeletePhotos.onclick = ()=>{
    imgFormOne.src="";
} 
  

async function postsUsers(id){
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    if(!response.ok){
        throw new Error('Такого пользователя нет')
    }
        const dataUser = await response.json();
       console.log(dataUser);
       
    return [dataUser.body] ;
    
} catch{
    console.log(e.message);
}
}
const listPost = document. querySelector('#list-posts');
function addDataPosts(argument){
    
    listPost.innerHTML = "";
    console.log(argument);
    argument.forEach(elem =>{
        const li = document.createElement('li');
        li.innerText = elem;
        listPost.append(li);
})
 } 

const formTwo = document.querySelector('.form-two');
 const inputId2 = document.querySelector('#input-id-2')
 formTwo.onsubmit = async (e)=>{
         e.preventDefault();
        
         const nummer = inputId2.value;
         const object = await postsUsers(nummer);
         addDataPosts(object);
         inputId2.value ="";
}  
const buttonDeletePosts = document.querySelector("#delet-posts");   
buttonDeletePosts.onclick = ()=>{
    listPost.innerHTML="";
} 
 