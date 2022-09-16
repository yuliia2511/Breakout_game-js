const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;

const ballRadius = 5;

let racketHeight = 5;
let racketWidth = 55;
let racketX = (canvas.width-racketWidth)/2;

const rightPressed = false;
const leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


function keyDownHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = true;
    } else if (e.keyCode === 37) {
        leftPressed = true;
    };
}

function keyUpHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = false;
    } else if (e.keyCode === 37) {
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

    x += dx;
    y += dy;

    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy;
    };

    if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    };

    if (rightPressed && racketX < canvas.width-racketWidth) {
        racketX += 7;
    } 
    else if (leftPressed && racketX > 0) {
        racketX -= 7;
    };
}

setInterval(draw, 15);


