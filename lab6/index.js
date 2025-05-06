`use strict`

const gameState = {
    previousCell: null,
    currentCell: null,
    previousMatrix: JSON.parse(localStorage.getItem('previousMatrix')) || null,
    currentScore: 0,
    countOfClick: 0,
    matrix: [],
    buttonText: 'New Game',
    timerInterval: 0,
};

const elements = {
    gameContainer: document.createElement('div'),
    buttonNewGame: document.createElement('button'),
    restartButton: document.createElement('button'),
    table: document.getElementById('matrix'),
    hud: document.createElement('div'),
    targetDisplay: document.createElement('span'),
    scoreDisplay: document.createElement('span'),
    timerDisplay: document.createElement('span'),
};

elements.gameContainer.className = 'game__container';

elements.targetDisplay.id = 'target__display';

elements.scoreDisplay.textContent = `Score: ${gameState.currentScore}`;

document.body.appendChild(elements.timerDisplay)
elements.timerDisplay.id = 'timer';

document.body.appendChild(elements.buttonNewGame)
elements.buttonNewGame.className = 'button__new__game';
elements.buttonNewGame.textContent = `${gameState.buttonText}`;

elements.restartButton.className = 'button__restart';
elements.restartButton.textContent = 'Restart';
document.body.appendChild(elements.restartButton);

document.body.appendChild(elements.gameContainer);
elements.gameContainer.appendChild(elements.table);
elements.gameContainer.appendChild(elements.hud);


elements.hud.className = 'hud';
elements.hud.appendChild(elements.targetDisplay);
elements.hud.appendChild(elements.scoreDisplay);
elements.hud.appendChild(elements.timerDisplay);

function initializeGame() {
    fetch('data/db.json')
        .then(response => response.json())
        .then(data => {
            const matrixKeys = Object.keys(data).filter(key => key.startsWith('matrix'));

            let randomIndex;
            let randomKey;
            let newMatrix;

            do {
                randomIndex = Math.floor(Math.random() * matrixKeys.length);
                randomKey = matrixKeys[randomIndex];
                newMatrix = data[randomKey];

            } while (JSON.stringify(newMatrix) === JSON.stringify(gameState.previousMatrix))

            gameState.matrix = newMatrix;

            if (gameState.matrix.length > 0) {
                gameState.previousMatrix = JSON.parse(JSON.stringify(gameState.matrix));
            }

            localStorage.setItem('previousMatrix', JSON.stringify(gameState.previousMatrix));

            const targetKey = `target${randomKey.charAt(0).toUpperCase() + randomKey.slice(1)}`;
            const target = data[targetKey];
            const targetDisplay = document.getElementById('target__display');
            targetDisplay.textContent = `Target: ${target}`;

            startTimer();
            lightsOut();
        })
        .catch(error => {
            console.error('Помилка при завантаженні даних:', error);
        });
}



function lightsOut() {
    elements.table.innerHTML = '';
    elements.table.style.pointerEvents = 'auto';

    for (let i = 0; i < gameState.matrix.length; i++) {
        const row  = document.createElement('tr');

        for (let j = 0; j < gameState.matrix[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = gameState.matrix[i][j].toString();
            cell.dataset.row = i.toString();
            cell.dataset.col = j.toString();
            cell.textContent = '';

            cell.addEventListener('click', handleClick)

            if (gameState.matrix[i][j] === 0) {
                cell.className = 'light__on';
            } else {
                cell.className = 'light__off';
            }

            row.appendChild(cell);
        }

        elements.table.appendChild(row);
    }
}

function handleClick() {
    const row = Number(this.dataset.row);
    const col = Number(this.dataset.col);

    gameState.currentCell = [row, col];
    if ( gameState.previousCell
        && gameState.previousCell[0] === gameState.currentCell[0]
        && gameState.previousCell[1] === gameState.currentCell[1]
    ) {
        gameState.countOfClick++;
        if (gameState.countOfClick % 2 === 0) {
            gameState.currentScore++;
        } else {
            gameState.currentScore--;
        }
        elements.scoreDisplay.textContent = `Score: ${gameState.currentScore}`;
    } else {
        gameState.countOfClick = 0;
        gameState.currentScore++;
        elements.scoreDisplay.textContent = `Score: ${gameState.currentScore}`;
    }
    gameState.previousCell = gameState.currentCell;
    toggleAround(gameState.currentCell);
    updateTable();
}

function toggleAround(Cell) {
    const dirs = [
        [0, 0],
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    for (const [di, dj] of dirs) {
        const newI = Cell[0] + di;
        const newJ = Cell[1] + dj;

        if (newI >= 0 && newI < gameState.matrix.length && newJ >= 0 && newJ < gameState.matrix[0].length) {
            gameState.matrix[newI][newJ] = toggle(gameState.matrix[newI][newJ]);
        }
    }
}

function toggle (value) {
    return value === 0 ? 1 : 0;
}

function updateTable() {
    for (let i = 0; i < gameState.matrix.length; i++) {

        for (let j = 0; j < gameState.matrix[i].length; j++) {
            const cell = document.querySelector(`td[data-row="${i}"][data-col="${j}"]`);
            const value = gameState.matrix[i][j];
            cell.textContent = '';

            cell.className = value === 0 ? 'light__on' : 'light__off';
        }
    }

    let isWin = gameState.matrix.every(row => row.every(cell => cell === 1));

    if (isWin) {
        setTimeout(() => {
            alert('Congratulations on winning the game!!!');
            elements.table.style.pointerEvents = 'none';
            clearInterval(gameState.timerInterval);
        }, 10);

    }
}

function startTimer() {
    gameState.seconds = 0;
    elements.timerDisplay.textContent = `Time: ${gameState.seconds}s`;

    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        gameState.seconds++;
        elements.timerDisplay.textContent = `Time: ${gameState.seconds}s`;
    }, 1000);
}

function newGame() {
    elements.buttonNewGame.addEventListener('click', () => {
        gameState.currentScore = 0;
        elements.scoreDisplay.textContent = `Score: ${gameState.currentScore}`;

        initializeGame();
    })
    initializeGame();
}

function restartGame() {
    elements.restartButton.addEventListener('click', () => {
        const savedMatrix = JSON.parse(localStorage.getItem('previousMatrix'));

        if (savedMatrix) {
            gameState.matrix = savedMatrix;
            gameState.currentScore = 0;
            elements.scoreDisplay.textContent = `Score: ${gameState.currentScore}`;
            startTimer();
            lightsOut();
        }
    });

}

restartGame();
newGame();
