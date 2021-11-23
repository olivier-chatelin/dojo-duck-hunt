const duck = document.getElementById('duck');
const bullets = document.getElementsByClassName('bullet')
const stepX = 100;
const stepY = 50;
const maxY = 450;
const maxX = 1000;

let bulletCount = 3;
duck.addEventListener('click',shoot)
document.addEventListener("keydown", function(e){
    switch(e.code) {
        case "ArrowDown":
            duck.style.top = `${duck.offsetTop +stepY}px` ;
            console.log(duck.offsetTop);

            duck.className="duck-down";
            break;
        case "ArrowLeft":
            console.log(duck.offsetLeft);
            duck.style.left = `${duck.offsetLeft -stepX}px` ;
            duck.className="duck-left";
            if (duck.offsetLeft <= 0){
                console.log('ko');
                duck.style.left = "0px";
            }
            break;
        case "ArrowRight":
            duck.style.left = `${duck.offsetLeft +stepX}px` ;
            duck.className="duck-right";
            console.log(duck.offsetLeft);
            break;
        case "ArrowUp":
            duck.style.top = `${duck.offsetTop -stepY}px` ;
            duck.className="duck-up";
            if (duck.offsetTop <= 0){
                duck.style.top = "0px";
            }
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