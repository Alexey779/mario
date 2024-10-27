const player = document.getElementById("player");
const damper = document.getElementById("damper");
const btn = document.querySelector(".start");
 let interval;
let isStart = false;
const activeJump = () => {
if(isStart === true) {
 if(!player.classList.contains("active")){
    player.classList.add("active");
 }
    
 setTimeout(() => {
    player.classList.remove("active");

 }, 300)
}
}

const startGame = () => {
isStart = true;
console.log(parseInt(window.getComputedStyle(player).getPropertyValue('top')));
damper.classList.add("animate")
   
interval = setInterval(() => {
let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
let damperLeft = parseInt(window.getComputedStyle(damper).getPropertyValue('left')) 
if(damperLeft < 50 && damperLeft > 0 && playerTop >= 140){
    andGame();
    alert("Вы проиграли!")
    
}

}, 10) 


}

const andGame = () => {
    isStart = false;
    clearInterval(interval); 
    damper.classList.remove("animate")   
    }

document.addEventListener("keydown", activeJump)
btn.addEventListener("click", ()=>{

    startGame()
});