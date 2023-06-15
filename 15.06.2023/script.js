// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”. 
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>
// async function getUser(id){
//     try{
//         const idRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const userPostsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//         if(!idRes.ok || !userPostsRes.ok){
//             throw new Error('Такого пользователя нет')
//         }
//             const userId = await idRes.json();
//             const userPosts = await userPostsRes.json();
//             return {user:userId, posts:userPosts};


    
//     }catch(e){
//         return console.log(e.message);

//     }
// }
// // getUser(1);

// const container = document.querySelector('user-container');

// async function addCard(id){
//     let getInfo = await getUser(id);
//     console.log(getInfo)
//     const container = document.createElement('div');
//     container.classList.add("user-container");
    
//     const user = document.createElement("div");
//     user.classList.add("user")

//     const post = document.createElement("div");
//     post.classList.add("posts")

//     const userName = document.createElement("p");
//     const userMail = document.createElement("p");

//     userName.innerText = getInfo.user.name;
//     userMail.innerText = getInfo.user.email;

//     user.append(userName, userMail);
//     container.append(user, post); 
//     document.body.append(container);

//     getInfo.posts.forEach(el=>{
//         const item = document.createElement("div")
//         const namePost = document.createElement("p");
//         const textPost = document.createElement("p");
//         namePost.innerText = el.title;
//         textPost.innerText = el.body;
//         item.append(namePost, textPost);
//         post.append(item);

//     })

   
// }
// // addCard(2)

// const buttonR = document.querySelector("#btnRicht");
// const buttonL = document.querySelector("btnLeft");

// let counter = 1;
// addCard(counter)

// buttonL.onclick = () => {
// if(counter>0){
//     counter--;
//     container.innerHTML = "";
//     addCard(counter)
// }
    
// }

// buttonR.onclick = ()=>{
//     if(counter<10){
//         counter++;
//         container.innerHTML = "";
//         addCard(counter)
//     }
   
// }




// Добавить в интерфейсе две кнопки (<- , ->) позволяющая переключаться между пользователями. При нажатии на стрелку в лево должен отправиться запрос на получение данных про пользователя с меньшим id, а при нажатии на кпопку в право данные про следующего пользователя




// Создать функцию, которая получает данные о пользователе и  добавляет div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру.
// <div class=”user-container”>
// 	<div class=”user”>
// 		<p>Имя пользователя</p>
// 		<p>Почта пользователя</p>
// 	</div>
// 	<div class=”posts”>
// 		<div class=”item”>
// 			<p>Название поста</p>
// 			<p>Текст поста</p>
// 		</div>
// 		<div class=”item”>
// 			<p>Название поста</p>
// 			<p>Текст поста</p>
// 		</div>
// 		….….
// 	</div>
// </div>
// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) получить все посты пользователя.Эти данные функция должна возвращать.
// Ссылка: 
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

// Данные должны быть в виде объекта 

// {
// 	user: {...},
// 	posts: [...]
// }

async function getUser(id){
    try{
        const idRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userPostsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        if(!idRes.ok || !userPostsRes.ok){
            throw new Error("Такого пользователя нет");
            }
        const userId = await idRes.json();
        const userPosts = await userPostsRes.json();
        return ({user:userId, posts:userPosts});
        } catch (e){
            console.log(e.message)
        }
}
getUser(1);
const container = document.querySelector(".user-container");

async function addCard(id) {

    

    try{
        const user = document.createElement("div");
        user.classList.add("user");
    
        const post = document.createElement("div");
        post.classList.add("posts");
        container.append(user, post);
    
        const userName = document.createElement("p");
        const userEmail = document.createElement("div");
        user.append(userName, userEmail);

        const getInfo = await getUser(id);

        console.log(getInfo);
     
     
        userName.innerText = getInfo.user.name;
        userEmail.innerText = getInfo.user.email;
     
        getInfo.posts.forEach(element => {
         const item = document.createElement("div");
         item.classList.add("item");
         post.append(item);
     
         const namePost = document.createElement("p");
         const textPost = document.createElement("p");
         item.append(namePost, textPost);
     
         namePost.innerText = element.title;
         textPost.innerText = element.body;
     
        });

    }catch{

        const messageErrorId = document.createElement("h2");
        messageErrorId.innerText = `Do not have user with id ${id}`;
        container.append(messageErrorId);

    }



}

const buttonL = document.querySelector("#btnLeft");
const buttonR = document.querySelector("#btnRight");
// let counter = 1;
let counter = localStorage.getItem("counter") || 1;

addCard(counter)

buttonL.onclick = () => {
    if(counter > 1){
    counter--;
    localStorage.setItem("counter", counter);
    container.innerHTML = "";
    addCard(counter)
}
}
buttonR.onclick = () => {
    counter++;
    container.innerHTML = "";
    localStorage.setItem("counter", counter);
    addCard(counter);

}

// ID выведенного пользователя должно сохраняться в localStorage и при обновлении страницы должны грузиться данные пользователя, на котором пользователь остановился в прошлый раз.

// Если при нажатии на кнопку функция, выводящая данные про пользователей, не получает никаких данных , то в интерфейс должно вывестись сообщение “Такого пользователя нет” и номер с пользователем не должен расти.