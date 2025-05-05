`use strict`

const optionDifficulty = document.querySelector('.select__difficulty');
const optionColor = document.querySelector('.select__color');
const clickElement = document.querySelector('.click__ellement');
const btnStart = document.querySelector('.btn__start');
const btnRestart = document.querySelector('.btn__restart');
const playingField = document.querySelector('.playing__field');
const gameOptions = document.querySelector('.game__options');
const gameStatus = document.querySelector('.game__status');
const scoreElement = document.querySelector('.score__element');
const timeLeftElement = document.querySelector('.time');
let score = 0;
let currentX = 0;
let currentY = 0;
let timeoutId;
let clickTimeout = 5000;
let timerInterval;

function StartGame() {
  btnStart.addEventListener('click', () => {
    if (optionDifficulty.value === 'Default' || optionColor.value === 'Default') {
      alert('Будь ласка, виберіть рівень складності та колір!');
      return;
    }
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    gameOptions.style.display = 'none';   
    gameStatus.style.display = 'block';   
    clickElement.style.pointerEvents = 'auto';
    clickElement.style.display = 'block';
    ChooseDifficulty();
    ChooseColor();
    moveRandomPosition();
  });
}

function ChooseDifficulty() {
    switch (optionDifficulty.value) {
      case 'Lazy':
        clickElement.className = 'click__ellement__lazy';
        break;
    
      case 'Normal':
        clickElement.className = 'click__ellement__normal'
        break;
  
      case 'Catch me if you can':
        clickElement.className = 'click__ellement__hard'
        break;
  
      default:
        break;
    }
}

function ChooseColor() {
    switch (optionColor.value) {
      case 'Red':
        clickElement.style.backgroundColor = 'red';
        break;
    
      case 'Blue':
        clickElement.style.backgroundColor = 'blue';
        break;

      case 'Green':
        clickElement.style.backgroundColor = 'green';
        break;

      default:
        break;
    }
}

function moveRandomPosition() {
  clearTimeout(timeoutId);
  clearInterval(timerInterval);

  const playingFieldWidth = playingField.offsetWidth;
  const playingFieldHeight = playingField.offsetHeight;

  const clickElementWidth = clickElement.offsetWidth;
  const clickElementHeight = clickElement.offsetHeight;

  let maxShift;

  switch (optionDifficulty.value) {
    case 'Lazy':
      maxShift = 300;
      clickTimeout = 10000;
      break;
    case 'Normal':
      maxShift = 450;
      clickTimeout = 5000;
      break;
    case 'Catch me if you can':
      maxShift = Math.min(playingFieldWidth, playingFieldHeight) - 50;
      clickTimeout = 2000;
      break;
    default:
      maxShift = 100;
      clickTimeout = 5000;
  }

  let shiftX = Math.floor(Math.random() * maxShift * 2) - maxShift;
  let shiftY = Math.floor(Math.random() * maxShift * 2) - maxShift;

  let newX = currentX + shiftX;
  let newY = currentY + shiftY;

  if (newX < 0 || newX > playingFieldWidth - clickElementWidth) {
    newX = currentX - shiftX;
  }
  if (newY < 0 || newY > playingFieldHeight - clickElementHeight) {
    newY = currentY - shiftY;
  }

  newX = Math.max(0, Math.min(newX, playingFieldWidth - clickElementWidth));
  newY = Math.max(0, Math.min(newY, playingFieldHeight - clickElementHeight));

  clickElement.style.left = `${newX}px`;
  clickElement.style.top = `${newY}px`;

  currentX = newX;
  currentY = newY;

  let timeLeft = clickTimeout / 1000;
  timeLeftElement.textContent = `Time left for click: ${timeLeft}`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timeLeftElement.textContent = `Time left for click: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);

  timeoutId = setTimeout(() => {
    if (timeLeft > 0) {
      endGame();
    }
  }, clickTimeout);
}

function incrementScore() {
  score++;
  scoreElement.textContent = `Score: ${score}`;
  clearInterval(timerInterval);
  moveRandomPosition();
}

function endGame() {
    alert(`Game over! Your score is ${score}, congratulations!\nPlease, restart the game to start a new game.`)
    clickElement.style.pointerEvents = 'none';  
    clearInterval(timerInterval);
    restartGame();
}

function restartGame() {
  btnRestart.addEventListener('click', () => {
    gameOptions.style.display = 'block';   
    gameStatus.style.display = 'none';   
    clickElement.style.display = 'none';
    optionDifficulty.selectedIndex = 0;
    optionColor.selectedIndex = 0;
    timeLeftElement.textContent = '';
  })
}

clickElement.addEventListener('click', incrementScore)


StartGame();