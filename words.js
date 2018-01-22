function Words (){
    this.wordBank = [ 'tacos', 'burgers', 'fries', 'sausage', 'pizza', 'nuggets'],
    this.wordsWon = 0,
    this.guessesRemain = 10;
    this.currentWord = null;

    this.noGuessesLeft = function (){
        // Logic that should happen when no guesses remain
    }
};