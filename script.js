// Select elements
const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');

// Variables
let isJumping = false;
let gravity = 0.9;
let position = 0;

// Jump function
function jump() {
    if (isJumping) return;
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            // Fall down
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 5;
                position = Math.max(position, 0);
                dino.style.bottom = position + 'px';
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

// Obstacle movement
function moveObstacle() {
    let obstaclePosition = 800;

    const obstacleInterval = setInterval(() => {
        if (obstaclePosition < -20) {
            obstaclePosition = 800;
        } else {
            obstaclePosition -= 5;
        }
        obstacle.style.right = obstaclePosition + 'px';

        // Check collision
        if (
            obstaclePosition > 50 &&
            obstaclePosition < 90 &&
            position < 40
        ) {
            clearInterval(obstacleInterval);
            alert('Game Over!');
            location.reload();
        }
    }, 20);
}

// Event listener
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

// Start obstacle movement
moveObstacle();
