function Hangman(guessWord) {
  this.guessWord = guessWord;
  this.letters = [];
  this.attempts = 6;
  this.wrongChars = [];
  this.line = [];

  this.hideWord = function hideWord() {
    this.letters = this.guessWord.split('');
    for (let i = 0; i < guessWord.length; i += 1) {
      this.line.push('_');
    }
    return this.line.join('');
  };

  this.guess = function guess(char) {
    if (this.attempts < 1) return 'You lost';
    if (this.letters.indexOf(char) === -1) {
      this.attempts -= 1;
      this.wrongChars.push(char);
      return `wrong letter errors left ${this.attempts} | ${this.wrongChars}`;
    }
    const guessedIdx = [];
    this.letters.forEach((item, idx) => {
      if (item === char) guessedIdx.push(idx);
      return guessedIdx;
    });
    guessedIdx.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      this.line[item] = char;
    });
    return this.line.join('');
  };

  this.getErrorsLeft = function getErrorsLeft() {
    return this.attempts;
  };

  this.getWrongSymbols = function getWrongSymbols() {
    return this.wrongChars;
  };

  this.getGuessedString = function getGuessedString() {
    return this.line;
  };

  this.getStatus = function getStatus() {
    return `${this.line} | errors left ${this.attempts}`;
  };

  this.startAgain = function startAgain(newWord) {
    this.guessWord = newWord;
    this.wrongChars = [];
    this.attempts = 6;
    this.hideWord();
    return this;
  };

  this.hideWord();
}

const hangman = new Hangman();
module.exports = hangman;
