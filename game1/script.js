let audioout = new Audio('gameover.mp3');
let audio = new Audio('music.mp3');

function doReload(){
    location.href = "http://127.0.0.1:5501/index.html";
}

document.onkeydown = function (e) {
    console.log("KEY Code is ", e.keyCode);
    if (e.keyCode == 38) {
        let dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    } else if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 108 + "px";
    } else if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 108) + "px";
    }
}

let score = 0;
let cross = true;

setTimeout(() => {
    audio.play()
}, 1000);

setInterval(() => {
    let dino = document.querySelector('.dino');
    let gameOver = document.querySelector('.gameOver');
    let obstacle = document.querySelector('.obstacle');

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);

    console.log(offsetX, offsetY);


    if (offsetX < 50 && offsetY < 50) {
        console.log("stop")
        obstacle.classList.remove('obstacleAnimate');
        gameOver.style.visibility = 'visible';
        audioout.play();
        audio.pause();
        setTimeout(() => {
            audioout.pause();
        }, 1000);
    }
    else if (offsetX < 50 && cross) {
        score += 1;
        cross = false;
        updateScore(score);
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.5;
            obstacle.style.animationDuration = newDur + 's';
        }, 700);

    }



}, 10);

function updateScore(score) {
    scorecount.innerHTML = "Your Score : " + score;
}
