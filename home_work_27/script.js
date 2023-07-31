setTimeout(()=>{alert("For start the game, click on 'Stone', 'Shears' or 'Paper'")

},2000);
const stoneYou = document.querySelector(".stone");
const shearsYou = document.querySelector(".shears");
const paperYou = document.querySelector(".paper");
const stonePc = document.querySelector(".stonePc");
const shearsPc = document.querySelector(".shearsPc");
const paperPc = document.querySelector(".paperPc");

function pcChoose(chooser){
   
    if(chooser===0){
     return stonePc.classList.toggle("show");
    } else if (chooser===1){
    return shearsPc.classList.toggle("show");
    }else{
     return paperPc.classList.toggle("show");
    }
 }





stoneYou.onclick = () =>{
    alert("You choose 'Stone'. Waiting for answer Computer");
    let chooser = Math.floor(Math.random()*3);
    pcChoose(chooser);
    setTimeout(()=>{
        if(chooser===0){
            // stone 
            alert('You choose "Stone". Computer choose "Stone". Draw. Try again.');
            stonePc.classList.toggle("show");
            }else if(chooser===1){
            // shears
            alert('You choose "Stone". Computer choose "Shears". You win. Try again.');
            shearsPc.classList.toggle("show");
            }else{
            // paper 
            alert('You choose "Stone". Computer choose "Paper". Computer win. Try again.');
            paperPc.classList.toggle("show");
            }
    },1000);
}


shearsYou.onclick = () =>{
    alert("You choose 'Shears'. Waiting for answer Computer");
    let chooser = Math.floor(Math.random()*3);
    pcChoose(chooser);
    setTimeout(()=>{
        if(chooser===0){
            // stone 
            alert('You choose "Shears". Computer choose "Stone". Computer win. Try again.');
            stonePc.classList.toggle("show");
            }else if(chooser===1){
            // shears
            alert('You choose "Shears". Computer choose "Shears". Draw. Try again.');
            shearsPc.classList.toggle("show");
            }else{
            // paper 
            alert('You choose "Shears". Computer choose "Paper". You win. Try again.');
            paperPc.classList.toggle("show");
            }
    },1000);
}

paperYou.onclick = () =>{
    alert("You choose 'Paper'. Waiting for answer Computer");
    let chooser = Math.floor(Math.random()*3);
    pcChoose(chooser);
    setTimeout(()=>{
        if(chooser===0){
            // stone 
           
            alert('You choose "Paper". Computer choose "Stone". You win. Try again.');
            stonePc.classList.toggle("show");
            }else if(chooser===1){
            // shears
            
            alert('You choose "Paper". Computer choose "Shears". Computer win. Try again.');
            shearsPc.classList.toggle("show");
            }else{
            // paper 
            
            alert('You choose "Paper". Computer choose "Paper". Draw. Try again.');
            paperPc.classList.toggle("show");
            }
    },1000);


}
