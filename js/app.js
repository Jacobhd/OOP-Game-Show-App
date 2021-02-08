/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;// = new Game();

// Returns new random game when `Start button` is clicked
document.querySelector('#btn__reset').addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

// Listens for clicks in the onscreen keyboard (event)
document.querySelector("#qwerty").addEventListener('click', (event) => {
  if (event.target.className === "key") {
    game.handleInteraction(event.target);
  }
});


/*          Pseudocode / Instructions         */

// Create a new instance of the `Game` class and add event listeners for the
// start button and onscreen keyboard buttons

/*          Testing Code         */
//-----------------------------------//
// Working correctly, logs: Active Phrase - phrase: EXAMPLE
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//-----------------------------------//
//console.log(this.activePhrase);
// Returns: undefined

// Test checkLetter()
// Successfully returns: True or False
//game.activePhrase.checkLetter('a'); // checkLetter 'b' & 'z'

// Test showMatchedLetter()
// Successful, displays 'a' on screen
//game.activePhrase.showMatchedLetter('a')

// Test checkForWin()
// Successfully returns: false
// Error: when all letters are displayed, returns false
//game.checkForWin()  // game returning undefined

// Test game.removeLife()
// Successfully replaces heart images
// Needs Heart Reset when 'Start Game' clicked after game over

// Test endGame
// Successfully displays conditional message on start screen
//game.removeLife()
//gameOver()
//-----------------------------------//
