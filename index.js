const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.FillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(120, 160, 20, 0, Math.PI*2, false);
ctx.FillStyle = 'green';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect();
ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
ctx.strokeStyle();
ctx.closePath();

