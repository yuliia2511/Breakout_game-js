const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.FillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(120, 160, 20, 0, Math.PI*2, false);
// ctx.FillStyle = 'green';
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect();
// ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
// ctx.strokeStyle();
// ctx.closePath();
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 40);
