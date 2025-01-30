// Tice tac Toe Code
//Setup the game
let boardSize = 3; // 3x3 board
let boardState; // 2D array to store the state of the board
let currentPlayer; // X or O
let player1Name = "Player 1"; // Player 1 name
let player2Name = "Player 2"; // Player 2 name
const boardElement = document.getElementById("board"); // The board in the UI
const winningMessageElement = document.getElementById('winningMessage')// The winning message in the UI
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');// The winning message in the UI
const restartButton = document.getElementById('restartButton');// The restart button in the UI
const startButton = document.getElementById('startButton');// The start button in the UI
const player1Input = document.getElementById('player1');// The input element for player 1
const player2Input = document.getElementById('player2');// The input element for player 2

// Initialize the game
startButton.addEventListener('click', () => {
    player1Name = player1Input.value;
    player2Name = player2Input.value;
    startGame();
});// Add event listener for start button

restartButton.addEventListener('click', startGame);// Add event listener for restart button

function startGame() {
    currentPlayer = 'X';// X goes first
    boardState = Array.from({ length: boardSize }, () => Array(boardSize).fill(''));// Create an empty 2D array to store the state of the board
    boardElement.style.gridTemplateColumns = `repeat(${boardSize}, auto)`;// Set the grid template columns property of the board
    boardElement.innerHTML = '';// Clear the board
    for (let i = 0; i < boardSize; i++) {// Loop over the board size
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');// Create a new div element
            cell.classList.add('cell');// Add the cell class to the div element
            cell.dataset.row = i;// Set the row attribute of the cell
            cell.dataset.col = j;// Set the col attribute of the cell
            cell.addEventListener('click', handleClick, { once: true });// Add event listener for the click event')
            boardElement.appendChild(cell);// Append the cell to the board
            boardElement.appendChild(cell);// Append the cell to the board
        }
        winningMessageElement.classList.remove('show');// Hide the winning message
    }// Start the game

    function handleClick(e) {
        const cell = e.target; // Get the cell that was clicked
        const row = cell.dataset.row; // Get the row of the cell
        const col = cell.data.col;// Get the col of the cell
        if (boardState[row][col] !== '') return;// If the cell is not empty, return
        boardState[row][col] = currentPlayer;// Set the cell to the current player
        cell.textConent = currentPlayer;// Set the text content of the cell to the current player
        if (checkWin()) {
            endGame(false);
        }// Check if the current player has won
        else if (checkDraw()) {
            endGame(true);//
        }// Check if the game is a draw
        else {
            swapTurns();// Swap turns
        }
    }// Handle the click event
}

function swapTurns() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';// Swap the current player
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.textContent = 'Draw!';// Set the winning message text to draw
    } else {
        winningMessageTextElement.textContent = `${currentPlayer === 'X' ? player1Name : player2Name} Wins!`;// Set the winning message text to the current player
    }
    winningMessageElement.classList.add('show');// Show the winning message
}

function isDraw() {
    return boardState.flat().every(cell => cell !== '');
}// Check if the game is a draw

function checkWin() {
    const lines = []// Create an empty array to store the lines
    for (let i = 0; i < boardSize; i++) 
    }