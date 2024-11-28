# Tic Tac Toe 🦃🎃

A fun, interactive Tic Tac Toe game with a Thanksgiving theme! This project showcases my understanding of **DOM manipulation**, event handling, and fundamental JavaScript concepts.

---

## About the Project

This is a **browser-based Tic Tac Toe game** where players take turns placing their symbols on a 3x3 grid. I enhanced the game with:

- **Thanksgiving-themed symbols**: 🦃 (Turkey) and 🎃 (Pumpkin).
- **Background music**.
- Interactive sound effects for each player's turn.

The goal is simple: align three symbols in a row, column, or diagonal to win!

---

## Features

### 🌟 Core Features:

- **Computer-player mode**: Alternating turns between Turkey and Pumpkin.
- **Dynamic DOM updates**: Every click updates the grid visually and programmatically.
- **Win detection**: Highlights the winning combination.
- **Tie detection**: Declares a tie if all boxes are filled without a winner.
- **Reset button**: Resets the board for a fresh game.

### 🎵 Additional Features:

- **Sound effects**: Plays a unique sound when a player places their symbol.

---

## Technologies Used

- **HTML**: For structuring the game elements.
- **CSS**: For styling the game board, buttons, and themes.
- **JavaScript (DOM Manipulation)**: For interactivity, event handling, and game logic.

---

## What I Learned

This project was a great way to solidify my skills in **DOM manipulation** and JavaScript. Here's a breakdown of what I learned:

### 🔗 DOM Manipulation

- **Dynamic Element Updates**: Used `document.createElement()` to dynamically add images (Turkey and Pumpkin) to the grid.
- **Styling Through JavaScript**: Styled elements directly using `element.style` properties, such as:
- **Appending Elements**: Leveraged `appendChild()` to insert new elements into the DOM.

### 🛠️ Event Handling

- **Click Events**: Listened for click events on each grid box to update the game state:
  ```javascript
  box.addEventListener("click", clickBox);
  ```
- **Button Events**: Implemented a reset button and a music toggle button with custom behavior.

---

## How to Play

1. **Start the Game**: Open the game in your browser.
2. **Take Turns**: Click on any grid box to place your symbol (Turkey or Pumpkin).
3. **Win or Tie**:
   - Align three symbols in a row, column, or diagonal to win.
   - Fill all boxes without a winner to tie.
4. **Reset the Game**: Click the "Reset" button to play again.

---

## Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
2. **Navigate to the Project Folder**:
   ```bash
   cd tic-tac-toe
   ```
3. **Open `index.html`** in your browser.

---

## Credits

### Images:

- Turkey and Pumpkin icons from [Freepik](https://www.freepik.com/).

### Sounds:

Sound effects from [Zapsplat](https://www.zapsplat.com/).

---
