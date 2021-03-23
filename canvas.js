const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

})

const mouse = {
    x:null,
    y:null
}
canvas.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    console.log(event);
    draw();
})

function draw(){
    ctx.fillStyle="red";
ctx.beginPath();
ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI *2);
ctx.fill();
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    draw();
    requestAnimationFrame(animate);
}

animate();