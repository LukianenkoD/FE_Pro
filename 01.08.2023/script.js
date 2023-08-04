const root = document.querySelector("#root");

const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg'
];

const frame = document.createElement('div');
frame.classList.add("frame");

const cards = document.createElement("div");
cards.classList.add("cards");

frame.append(cards);
root.append(frame);

for(let x=0; x<images.length; x++){
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url("${images[x]}")`;
    cards.append(card);
}
//rectangel button
const rectangelLeft = document.createElement("div");
rectangelLeft.classList.add("rectangleLeft");
frame.append(rectangelLeft);
const recBtnLeft = document.createElement("button");
rectangelLeft.append(recBtnLeft);



const rectangelRicht = document.createElement("div");
rectangelRicht.classList.add("rectangleRicht");
frame.append(rectangelRicht);
const recBtnRicht = document.createElement("button");
rectangelRicht.append(recBtnRicht);


const rounds = document.createElement("div");
rounds.classList.add("rounds");
frame.append(rounds);

let counter = 0;
for(let i = counter; i<images.length; i++){
    const round = document.createElement("button");
    rounds.append(round);

    let all_btns = round.parentElement.children;
    all_btns[counter].classList.add("active");

    
    round.onclick = () =>{   
        cards.style.left = `${-1*i*500}px`;        
        counter = i;
        changeBtn();
    }

    function changeBtn(){
        for(let j=0; j<all_btns.length;j++){
            all_btns[j].classList.remove("active");
        }
        round.classList.add("active");
     }
   
    recBtnLeft.onclick = () =>{
        cards.style.left = toggelCounter(--counter);
        for(let j=0; j<all_btns.length;j++){
            all_btns[j].classList.remove("active");
        }
        all_btns[counter].classList.add("active");     
    }
    
    recBtnRicht.onclick = () =>{
            cards.style.left = toggelCounter(++counter);
            for(let j=0; j<all_btns.length;j++){
                all_btns[j].classList.remove("active");
            }
            all_btns[counter].classList.add("active");
         }
}
    
function toggelCounter(count){
    if(count<0){
        counter = images.length-1;
    }
    else if(count>images.length-1){
        counter = 0;
    }
    const move = `${-1*counter*500}px`;
    return move;

}







   
   

