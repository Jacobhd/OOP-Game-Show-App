/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // Game class methods start and end the game, handle interaction, pull random phrases,
 // replace life img(s) from scoreboard, check for end game conditions, and reset game board

class Game {
  constructor () { // constructor method properties
    this.missed = 0; // used to track the number of missed guesses by the player
    this.phrase = this.createPhrases();
    this.activePhrase = null;
  }

  // Creates phrases and returns an array of objects to be used in game
  createPhrases() {
    const phrase = [
      new Phrase('Engage'),
      new Phrase('Make it so'),
      new Phrase('Live long and prosper'),
      new Phrase('Weird is part of the job'),
      new Phrase('To boldly go where no one has gone before')];
    return phrase;
  }

  // Randomly retrieves one phrase from the 'phrase' array
  getRandomPhrase() {
    return this.phrase[Math.floor(Math.random() * this.phrase.length)];
  }

  // Begins game by hiding start screen, enabling class conditions to reset, displaying hidden random phrase to user
  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    // if `win` or `lose` class conditions are met, reset gameboard
    if (overlay.className === 'win' || overlay.className === 'lose') {
      this.gameReset();
    }
    this.activePhrase = this.getRandomPhrase(); // returns randomPhrase as activePhrase
    this.activePhrase.addPhraseToDisplay(); // adds activePhrase to display
  }

  // Handles user interaction and functionality of app. Setting letter classes,
  // displaying letters, disabling letters, removeLife() and checkForWin() methods

  handleInteraction(button) {
    let letter = button.textContent; // sets button string value as letter chosen
    // if letter is in phrase, show, label, disable, and checkForWin
    if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter); // show matching letters
      button.classList.add("chosen"); // label `chosen` class
      button.setAttribute("disabled", true); // disable chosen letter
      // if checkForWin() method is true, display `win`
      if (this.checkForWin()) {
        this.gameOver(true);
      }
      // else set `wrong` class, disable letter, and calls removeLife() method
      } else {
        button.classList.add("wrong");
        button.setAttribute("disabled", true);
        this.removeLife();
    }
  }

  // Checks win condition - returns a boolean, true if won, false if game lost
  checkForWin() {
    const hidden = document.querySelectorAll('.hide');
    return !hidden.length; // checks if there are no hidden letters left to reveal in the active phrase
  }

  // Removes a life from scoreboard, checks if player has remaining lives and ends game if not
  removeLife() {
    const heart = document.querySelectorAll('.tries img'); // stores heart img
    heart[this.missed].src = 'images/lostHeart.png'; // sets `missed` property to replace `liveHeart.png` with `lostHeart.png`
    this.missed += 1; // increments 'missed' property, replacing images
    // if 5 guesses missed, gameOver(false) results as loss
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  // Updates overlay with the outcome of the game
  gameOver(gameWon) { // boolean of whether or not the user won the game
    document.querySelector('#overlay').style.display = '';
    const gameOver = document.getElementById("game-over-message");
    // applies `.start` class with either `.win` or `.lose` class and displays game over message
    if (gameWon === true) {
      overlay.className = "win";
      gameOver.innerHTML = "Great Job, You Won!";
    } else {
      overlay.className = "lose";
      gameOver.innerHTML = "Sorry, better luck next time!";
    }
  }

  // Resets game by removing `li` elements from `phrase` div,
  // enable onscreen buttons and update each `key` class, and resets heart images

  gameReset() {
    document.querySelector('#phrase ul').innerHTML = ''; // reset `phrase ul`
    document.querySelectorAll('.key').forEach(key => { // reset letters `key` class
      key.className = 'key';
      key.disabled = false;
    });
    const hearts = document.querySelectorAll('.tries img');
    hearts.forEach(heart => { // Reset all heart images
      heart.src = 'images/liveHeart.png';
    });
    this.missed = 0; // Reset counter
  }

} // end `Game` class
