const button = document.querySelector("button");
const boxes = Array.from(document.getElementsByClassName("box"));

const turkeySound = new Audio("./sounds/turkey1.mp3");
const corkSound = new Audio("./sounds/cork.mp3");

const X_img = "./images/turkey.png";
const O_img = "./images/pumpkin.png";

let currentPlayer = X_img;
let spaces = Array(9).fill(null);

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

const gameStart = () => {
  boxes.forEach((box) => box.addEventListener("click", clickBox));
};

const clickBox = (e) => {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    if (currentPlayer === X_img) {
      turkeySound.play();
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
      setTimeout(() => {
        alert(`${currentPlayer === X_img ? "Turkey" : "Pumpkin"} wins!`);
      }, 300);
      return;
    }

    if (spaces.every((space) => space !== null)) {
      alert("It's a tie!");
      reset();
      return;
    }

    currentPlayer = currentPlayer === X_img ? O_img : X_img;
  }
};

const reset = () => {
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.backgroundColor = "";
  });
};

const playerWin = () => {
  for (const condition of winCombinations) {
    const [a, b, c] = condition;
    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
};

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
