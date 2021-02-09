/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game; // = new Game();

// Returns new random phrase game when `Start Game` button is clicked
document.querySelector('#btn__reset').addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

// Listens for events from clicks in the onscreen keyboard buttons
document.querySelector("#qwerty").addEventListener('click', (event) => {
  // when user clicks a letter on the screen, passes event to handleInteraction method
  if (event.target.className === "key") {
    game.handleInteraction(event.target);
  }
});

// Global listener for `keydown` events from user's physical keyboard
document.addEventListener('keydown', event => {
  document.querySelectorAll('.key').forEach(button => { // selects all `key` class values and associates them to button's string values
    // if button's string value equals event's `key` value and the letter is enabled, pass to handleInteraction() method
    if (button.textContent === event.key && button.disabled === false) {
      game.handleInteraction(button);
    }
  });
});
