const root = document.querySelector(".root");

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

    let all_card = card.parentElement.children;
    all_card[0].classList.add("big");
    card.onclick = () =>{
       
        for(let j=0; j<all_card.length;j++){
         
                all_card[j].classList.remove("big");
           
           
        }
        card.classList.add("big");
    }
}