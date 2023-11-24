const dice = document.getElementById("dice")
document.getElementById("btn").addEventListener("click",()=>{
    dice.innerHTML = Math.floor(Math.random()*6)+1
})