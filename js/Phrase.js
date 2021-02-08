/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // Phrase class to handle creation of phrases and letter interface
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
// Adds a random phrase to display. Creates a <li> for each letter and space, and appends it to <ul> on the page
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i += 1) {
      let placeHolder = document.createElement('li');
      let letter = this.phrase[i]; // [i] = letters of phrase
      if (letter === ' ') { // Gives class names to spaces and letters accordingly
        placeHolder.className = 'space';
      } else {
        placeHolder.className = `hide letter ${letter}`;
      }
      placeHolder.textContent = letter;
      phraseDiv.appendChild(placeHolder);
    }
  };
  // Checks if passed letter is in phrase
  checkLetter(letter) { // letter string value
    //Check if the this.phrase includes the letter parameter
    return this.phrase.includes(letter);
  }
  // Displays passed letter on screen after match is found
  showMatchedLetter(letter) { // letter string value
    const li = document.querySelectorAll('#phrase li');
    li.forEach(matched => { // give any matching letter in the phrase class of 'show'
      if (matched.textContent === letter) {
        matched.setAttribute('class', 'show'); // .show CSS class
      }
    });
  }

}

/*
phrase: This is the actual phrase the Phrase object is representing. This property
should be set to the `phrase` parameter, but converted to all lower case.

phraseToDisplay method: adds letter placeholders to display.
Represented by an empty grey box as <li> elements
when correct guess, empty box is replaced with matched letter (showMatchedLetter())
phrase displayed uses .letter CSS class for letters and .space CSS class for spaces

checkLetter method: checks if a selected letter is in the phrase

showMatchedLetter: reveals the letter(s) on the board that matches the player's selection
replace CSS class to .show for matching letters
*/
