const duck = document.getElementById('duck');
const bullets = document.getElementsByClassName('bullet')
const stepX = 100;
const stepY = 50;
let bulletCount = 3;
duck.addEventListener('click',shoot)
document.addEventListener("keydown", function(e){
    switch(e.code) {
        case "ArrowDown":
            duck.style.top = `${duck.offsetTop +stepY}px` ;
            duck.className="duck-down";
            break;
        case "ArrowLeft":
            duck.style.left = `${duck.offsetLeft -stepX}px` ;
            duck.className="duck-left";
            break;
        case "ArrowRight":
            duck.style.left = `${duck.offsetLeft +stepX}px` ;
            duck.className="duck-right";
            break;
        case "ArrowUp":
            duck.style.top = `${duck.offsetTop -stepY}px` ;
            duck.className="duck-up";
            break;
    }
})
function bulletDecrement(){
    bulletCount--;
    bullets[bulletCount].style.display="none";
    if(bulletCount === 0){
        gameOver();
    }
}
const gameScreen = document.getElementById('gameScreen');
gameScreen.addEventListener('click',()=>{
    new Audio('sounds/gunShot.mp3').play();
    bulletDecrement();
})