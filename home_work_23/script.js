// 1)Реализовать функцию удаления поста. Добавьте кнопку "Удалить" для каждого поста пользователя. При нажатии на кнопку отправьте DELETE-запрос на сервер (https://jsonplaceholder.typicode.com/posts/{postId}), где {postId} - идентификатор удаляемого поста. После успешного удаления, обновите список постов пользователя.
// 2) добавьте стили для данной программы.

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

        let getInfo = await getUser(id);

        

        console.log(getInfo);
     
     
        userName.innerText = getInfo.user.name;
        userEmail.innerText = getInfo.user.email;
       
        getInfo.posts.forEach(element => {
         const item = document.createElement("div");
         item.classList.add("item");
         post.append(item);
     
         const namePost = document.createElement("p");
        //  const buttonDeletenamePost = document.createElement("button");
        //  buttonDeletenamePost.innerText = "Delete"
         
         const textPost = document.createElement("p");
         const buttonDeletetextPost = document.createElement("button");
         buttonDeletetextPost.innerText = "Delete";
        
         namePost.innerText = element.title;    
         textPost.innerText = element.body;
         item.append(namePost, /*buttonDeletenamePost*/ textPost, buttonDeletetextPost);
        //  buttonDeletenamePost.onclick =async () =>{
        //     namePost.innerText = "";    
        //     textPost.innerText = ""; 
        //     buttonDeletenamePost.remove();
        //     let deletePostId = await deletePosts(id);
        //     console.log(`${JSON.stringify(deletePostId)} - ${id}`);
        //     }

            buttonDeletetextPost.onclick = async () =>{
            textPost.innerText = "";    
            namePost.innerText = "";
            item.remove();
            buttonDeletetextPost.remove();
            let deletePostId = await deletePosts(id);
            console.log(`${JSON.stringify(deletePostId)} - ${id}`);
            }

        
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
    
    counter--;
    localStorage.setItem("counter", counter);
    container.innerHTML = "";
    addCard(counter)
}

buttonR.onclick = () => {
    counter++;
    container.innerHTML = "";
    localStorage.setItem("counter", counter);
    addCard(counter);

}

async function deletePosts(id){
    try{
        const deletePosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: "delete",
        
        });
       console.log(deletePosts);
        if(!deletePosts.ok){
            throw new Error("Такого пользователя нет");
            }
        const deletePostsReturn = await deletePosts.json();
        // console.log(deletePostsReturn);
        return ({posts:deletePostsReturn});
        } catch (e){
            console.log(e.message)
        }
}


