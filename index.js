const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const ballRadius = 5;

let racketHeight = 5;
let racketWidth = 45;
let racketX = (canvas.width-racketWidth)/2;

const rightPressed = false;
const leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


function keyDownHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = true;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = true;
    };
}

function keyUpHandler(e) {
    if (e.key == 'Right' || e.key == 'ArrowRight') {
        rightPressed = false;
    } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
        leftPressed = false;
    };
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.closePath();
}

function drawRacket() {
    ctx.beginPath();
    ctx.rect(racketX, canvas.height - racketHeight, racketWidth, racketHeight);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawRacket();

    if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    };

    if (y + dy < ballRadius) {
        dy = -dy; 
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > racketX && x < racketX + racketWidth) {
            dy = -dy; 
        } else {
            alert('Game Over!');                           //не выбивает 
            document.location.reload();
            clearInterval(interval);
        };
    };

    if (rightPressed && racketX < canvas.width-racketWidth) {    //не двигается ракетка
        racketX += 7;
    } 
    else if (leftPressed && racketX > 0) {
        racketX -= 7;
    };

    x += dx;
    y += dy;
}

let interval = setInterval(draw, 10);


