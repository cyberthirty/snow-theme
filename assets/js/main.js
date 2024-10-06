// Snow effect
(function() {
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let snowflakes = [];

    function createSnowflakes() {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * 4 + 1;
        let speed = Math.random() * 3 + 1;
        snowflakes.push({x, y, radius, speed});
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        for (let i = 0; i < snowflakes.length; i++) {
            let flake = snowflakes[i];
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        }
        ctx.fill();
        moveSnowflakes();
    }

    function moveSnowflakes() {
        for (let i = 0; i < snowflakes.length; i++) {
            let flake = snowflakes[i];
            flake.y += flake.speed;
            if (flake.y > canvas.height) {
                flake.y = 0;
                flake.x = Math.random() * canvas.width;
            }
        }
    }

    function update() {
        createSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(update);
    }

    update();
})();

// Day/Night mode toggle
let isDay = true;
const toggleButton = document.createElement('button');
toggleButton.id = 'mode-toggle';
toggleButton.innerText = 'Night Mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('night');
    isDay = !isDay;
    toggleButton.innerText = isDay ? 'Night Mode' : 'Day Mode';
});
