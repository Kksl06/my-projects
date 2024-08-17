const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 25;
canvas.width = 500;
canvas.height = 500;

let snake = [
    { x: gridSize * 5, y: gridSize * 5 },
];
let direction = { x: gridSize, y: 0 };
let food = { x: gridSize * 10, y: gridSize * 10 };
let score = 0;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction.x === 0) {
        direction = { x: -gridSize, y: 0 };
    } else if (key === 38 && direction.y === 0) {
        direction = { x: 0, y: -gridSize };
    } else if (key === 39 && direction.x === 0) {
        direction = { x: gridSize, y: 0 };
    } else if (key === 40 && direction.y === 0) {
        direction = { x: 0, y: gridSize };
    }
}

function drawSnake() {
    ctx.fillStyle = "purple";
    snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = "blue";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };


    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
        resetGame();
        return;
    }


    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            resetGame();
            return;
        }
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
        placeFood();
    } else {
        snake.pop();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
}

function placeFood() {
    food.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
    food.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
}

function resetGame() {
    snake = [{ x: gridSize * 5, y: gridSize * 5 }];
    direction = { x: gridSize, y: 0 };
    score = 0;
    document.getElementById("score").textContent = `Score: ${score}`;
    placeFood();
}

setInterval(update, 100);
