/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // Create Game class methods for starting and ending the game, handling interaction,
 // getting a random phrase, checking for a win, and removing a life from the scoreboard

class Game {
  constructor () {
    this.missed = 0;
    this.phrase = this.createPhrases();
    this.activePhrase = null;
  }
  // Creates phrases and returns an array of objects to be used in game
  createPhrases() {
    const phrase = [
      new Phrase('Live long and prosper'),
      new Phrase('Things are only imposible until theyre not'),
      new Phrase('Theres still much to do still so much to learn'),
      new Phrase('Change is the essential process of all existence'),
      new Phrase('To boldly go where no one has gone before')];
    return phrase;
  }
  // Selects random phrase from phrases property, returns Phrase object to be used
  getRandomPhrase() {
    return this.phrase[Math.floor(Math.random() * this.phrase.length)];
    // const randomPhrase = this.phrases[randomIndex];
    // const activePhrase = new Phrase(randomPhrase);
    // return activePhrase;
  }
  // Begins game by hiding start screen, selecting a random phrase and displaying it to user
  startGame() {
    document.querySelector('#overlay').style.display = 'none'; // selectElement method?
    // Hides the start screen when clicked
    this.activePhrase = this.getRandomPhrase(); // returns randomPhrase as activePhrase
    this.activePhrase.addPhraseToDisplay();
    // return true;
  }
  // Handles user interaction and functionality of app
  // Checks to see if the button clicked matches a letter in the phrase
  handleInteraction(button) {
    let letter = button.textContent; // Letter chosen
    // If letter is in phrase, disable, show, and checkForWin
    if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter); // Show all matching letters
      button.classList.add("chosen"); // Label `chosen`
      button.setAttribute("disabled", true); // Disable chosen letter
      // If checkForWin is true, display `win`
      if (this.checkForWin()) {
        this.gameOver(true);
      }
      // else set `wrong` class, disable letter, and removeLife
      } else {
        button.classList.add("wrong");
        button.setAttribute("disabled", true);
        this.removeLife();
    }
  }
  // Checks for winning move - returns boolean true if won, false if game wasn't won
  // Checks if player has revealed all of the letters in the active phrase
  checkForWin() {
    const hidden = document.querySelectorAll('.hide');
    // return !hidden.length;
    if (!hidden.length) {
      return true;
      //this.gameOver(true);
    } else {
      return false;
      //this.gameOver(false);
    }
  }
  // Increases value of 'missed' property, removes a life from scoreboard
  // One of the `liveHeart.png` images is replaced with a `lostHeart.png` image
  // Checks if player has remaining lives and ends game if not.
  removeLife() {
    const heart = document.querySelectorAll('.tries img'); // Variable to store image
    heart[this.missed].src = 'images/lostHeart.png';
    this.missed += 1;
    if (this.missed === 5) { // If missed 5, gameover
      this.gameOver(false);
    }
  }
  // Displays game over message
  // Applies `.start` CSS class with either `.win` or `.lose` CSS class
  gameOver(gameWon) { // boolean of Whether or not the user won the game
    document.querySelector('#overlay').style.display = ''; // Start screen
    const gameOver = document.getElementById("game-over-message");
    // Displays original start screen with outcome of game
    if (gameWon === true) { // Updates overlay with `h1` element friendly win or loss message
      overlay.className = "win";
      gameOver.innerHTML = "Great Job, You Won!";
    } else {
      overlay.className = "lose";
      gameOver.innerHTML = "Sorry, better luck next time!";
    }
    //reset();
  }

}

/*

When user clicks onscreen button -
The clicked/chosen letter must be captured.
The clicked letter must be checked against the phrase for a match.
If there’s a match, the letter must be displayed on screen instead of the placeholder.
If there’s no match, the game must remove a life from the scoreboard.
The game should check if the player has won the game by revealing all of the letters in
  the phrase or if the game is lost because the player is out of lives.
If the game is won or lost, a message should be displayed on screen.

Create Game class methods for starting and ending the game, handling interaction,
getting a random phrase, checking for a win, and removing a life from the scoreboard

missed: Used to track the number of missed guesses by the player. The initial
value is `0`

startGame: hides start screen overlay, sets `activePhrase` property to random phrase
calls addPhraseToDisplay() on active phrase

getRandomPhrase: randomly retrieves one phrase from the 'phrases' array

handleInteraction: Checks if button clicked matches letter in phrase = correct or incorrect guess
disable selected letter's onscreen keyboard button
if phrase does not inclue guessed letter,
apply `wrong` class to selected letter's button and `removeLife()` is called
for correct letter guess, `chose` class added to selected button.
`showMatchedLetter()` is called on phrase, and call `checkForWin()`
If player has won the game, call gameOver() method

removeLife: Removes a life from the scoreboard (one of the `liveHeart.png` images
is replaced with a `lostHeart.png` image), increments the
`missed` property, and if the player has lost the game calls the `gameOver()` method

checkForWin: Checks if player has revealed all of the letters in the active phrase

gameOver: Displays final "win" or "loss" message by showing the original start screen
overlay styled with either the `win` or `lose` CSS class

gameReset: After game is completed, reset gameboard by clicking "Start Game" button.
Loads a new game, removes all `li` elements from Prase `ul` element. Reset all heart images.
Enable all onscreen buttons and update each to use `key` CSS class



*/
