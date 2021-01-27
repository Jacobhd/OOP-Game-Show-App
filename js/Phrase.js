/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // Phrase class to handle creation of phrases
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
// Method adds a random phrase to display. Creates a <li> for each letter and space, and appends it to <ul> on the page
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i += 1) {
      let placeHolder = document.createElement('li');
      let letter = this.phrase[i];
      if (letter === ' ') { // Gives class names to spaces and letters accordingly
        placeHolder.className = 'hide space';
      } else {
        placeHolder.className = `hide letter ${letter}`;
      }
      placeHolder.textContent = letter;
      phraseDiv.appendChild(placeHolder);
    }
  };
  // Checks if passed letter is in phrase
  checkLetter(letter) { // letter string value

  }
  // Displays passed letter on screen after match is found
  showMatchedLetter(letter) { // letter string value

  }

}


/*
phrase: This is the actual phrase the Phrase object is representing. This property
should be set to the `phrase` parameter, but converted to all lower case.

checkLetter method: checks if a letter is in the phrase

showMatchedLetter: reveals the letter(s) on the board that matches the player's selection
*/
