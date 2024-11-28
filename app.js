const button = document.querySelector("button");
const boxes = Array.from(document.getElementsByClassName("box"));

const turkeySound = new Audio("./sounds/turkey1.mp3");
const corkSound = new Audio("./sounds/cork.mp3");

const X_img = "./images/turkey.png";
const O_img = "./images/pumpkin.png";

let currentPlayer = X_img;
let spaces = Array(9).fill(null);
let gameOver = false;

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Destructure the winning combinations
const playerWin = () => {
  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
};

const gameStart = () => {
  boxes.forEach((box) => box.addEventListener("click", clickBox));
};

//Find best move
const findBestMove = () => {
  const opponent = currentPlayer === X_img ? O_img : X_img;
  for (const [a, b, c] of winCombinations) {
    if (spaces[a] === opponent && spaces[a] === spaces[b] && !spaces[c])
      return c;
    if (spaces[a] === opponent && spaces[a] === spaces[c] && !spaces[b])
      return b;
    if (spaces[b] === opponent && spaces[b] === spaces[c] && !spaces[a])
      return a;
  }

  return null;
};

// Computer move set-up
const computerMove = () => {
  if (gameOver) return;

  const bestMove = findBestMove();
  const emptySpaces = spaces
    .map((space, index) => (space === null ? index : null))
    .filter((index) => index !== null);

  const move =
    bestMove !== null
      ? bestMove
      : emptySpaces[Math.floor(Math.random() * emptySpaces.length)];

  if (move !== null) {
    spaces[move] = currentPlayer;
    const img = document.createElement("img");
    img.src = currentPlayer;
    img.alt = currentPlayer === X_img ? "Turkey" : "Pumpkin";
    img.style.width = "90%";
    img.style.height = "90%";
    img.style.borderRadius = "50%";
    img.style.boxShadow = "4px 4px 8px black";
    boxes[move].appendChild(img);

    const winningCombo = playerWin();
    if (winningCombo) {
      highlightWinningCombination(winningCombo);
      gameOver = true;
      setTimeout(() => {
        alert(`${currentPlayer === X_img ? "Turkey" : "Pumpkin"} wins!`);
      }, 300);
      return;
    }

    if (spaces.every((space) => space !== null)) {
      gameOver = true;
      setTimeout(() => {
        alert("It's a tie!");
        reset();
      }, 300);
      return;
    }

    currentPlayer = currentPlayer === X_img ? O_img : X_img;
  }
};

// Player move set-up
const clickBox = (e) => {
  if (gameOver) return;

  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    if (currentPlayer === X_img) {
      turkeySound.play();
      turkeySound.volume = 0.7;
    } else {
      corkSound.play();
    }
    const img = document.createElement("img");
    img.src = currentPlayer;
    img.alt = currentPlayer === X_img ? "Turkey" : "Pumpkin";
    img.style.width = "90%";
    img.style.height = "90%";
    img.style.borderRadius = "50%";
    img.style.boxShadow = "4px 4px 8px black";
    e.target.appendChild(img);

    const winningCombo = playerWin();
    if (winningCombo) {
      highlightWinningCombination(winningCombo);
      gameOver = true;
      setTimeout(() => {
        alert(`${currentPlayer === X_img ? "Turkey" : "Pumpkin"} wins!`);
      }, 300);
      return;
    }

    if (spaces.every((space) => space !== null)) {
      gameOver = true;
      setTimeout(() => {
        alert("It's a tie!");
        reset();
      }, 300);
      return;
    }

    currentPlayer = currentPlayer === X_img ? O_img : X_img;

    if (currentPlayer === O_img) {
      setTimeout(computerMove, 1200);
    }
  }
};

// Reset button
const reset = () => {
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.backgroundColor = "";
  });
  currentPlayer = X_img;
  gameOver = false;
};

// Highlight the winning line
const highlightWinningCombination = (winningCombo) => {
  let isHighlighted = false;
  const interval = setInterval(() => {
    isHighlighted = !isHighlighted;
    winningCombo.forEach((index) => {
      boxes[index].style.backgroundColor = isHighlighted ? "orange" : "";
    });
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    winningCombo.forEach((index) => {
      boxes[index].style.backgroundColor = "orange";
    });
  }, 3000);
};

button.addEventListener("click", reset);

gameStart();
