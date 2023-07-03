// 1)Задачи: на основе данного объекта создать гистограмму.



const canvas = document.querySelector("#hw-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
let arrayPcLangueges = [
    {
        title: 'javascript',
        amount: 150000
    },
    {
        title: 'python',
        amount: 140000
    },
    {
        title: 'golang',
        amount: 130000
    },
    {
        title: 'java',
        amount: 120000
    }
];
function draw(){
    
const ctx = canvas.getContext("2d");
const num = arrayPcLangueges.length;
const rechtW = canvas.width/num;
const rechtH = canvas.height/170000;
for(let i =0; i<arrayPcLangueges.length; i++){
    let singleRechtH =rechtH*arrayPcLangueges[i].amount;
    let singleRechtX = rechtW*i;
    let singleRechtY = canvas.height-singleRechtH;
    // ctx.fillStyle="orange";
    // ctx.fillRect(singleRechtX, singleRechtY,rechtW, singleRechtH);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "orange";
    ctx.strokeRect(singleRechtX, singleRechtY,rechtW, singleRechtH);
   

    ctx.font = "48px Arial";
    ctx.fillStyle="red";
    // 2) Добавьте текст для каждой колонки, используя метод fillText. 
    ctx.fillText(`${arrayPcLangueges[i].title} - ${arrayPcLangueges[i].amount}`, singleRechtX, singleRechtY);

    // 3)Задача: Нарисовать простую смайликовую иконку с использованием метода arc.


// Напишите код, который будет рисовать простую смайликовую иконку на канвасе. Иконка должна состоять из желтого круга, двух черных глаз и улыбки.

    ctx.beginPath();
    ctx.arc(150,400,100,0,2*Math.PI);
    ctx.moveTo(100,380);
    ctx.lineTo(105,380);
    ctx.fillStyle = "yellow";
    ctx.fill()
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(150,420,55,0,Math.PI);
    ctx.moveTo(190,380);
    ctx.lineTo(195,380);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    
} }
draw();


