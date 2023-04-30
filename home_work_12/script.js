let array = ["https://abrakadabra.fun/uploads/posts/2022-02/1644890896_1-abrakadabra-fun-p-oboi-na-telefon-tsveti-priroda-1.jpg",
"https://assets.pixolum.com/blog/wp-content/uploads/2019/09/Blumen-Fotografieren-50mm-800x533.jpg",
"https://i.ytimg.com/vi/Q6QpJqjABqA/maxresdefault.jpg",
"https://www.nastol.com.ua/large/202007/412307.jpg",
"https://funik.ru/wp-content/uploads/2019/10/a7a546d57f88ed3f138c-2-700x525.jpg",
"https://pibig.info/uploads/posts/2021-11/1638196134_2-pibig-info-p-zhivie-tsveti-v-prirode-priroda-krasivo-fo-2.jpg",
"https://images.prom.ua/1833427770_w640_h640_flizelinovye-krasivye-oboi.jpg"];

const div1 = document.createElement("div");
for(let i = 0; i<array.length;i++){
    const div = document.createElement("div");

    let link = document.createElement("img");
    link.setAttribute("src", array[i]);
    link.innerText = array[i];
    link.classList.add("imges-action");
    div1.classList.add("position");
    div.append(link);
    div1.append(div);
    document.body.append(div1);
link.onclick = () =>{
    if(link.classList[0] === "imges-action"){
        link.classList.remove("imges-action");
        link.classList.add("active");
    }else{
        link.classList.remove("active");
        link.classList.add("imges-action");
    
    }
}
}