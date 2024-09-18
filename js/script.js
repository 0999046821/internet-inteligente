const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('particle-container').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = document.getElementById('navbar').offsetHeight;

const particlesArray = [];
const numberOfParticles = 50;

class Particle {
    constructor(x, y, size, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() * 0.4) - 0.2;
        const speedY = (Math.random() * 0.4) - 0.2;
        const color = 'rgba(255, 255, 255, 0.8)';

        particlesArray.push(new Particle(x, y, size, speedX, speedY, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = document.getElementById('navbar').offsetHeight;
});