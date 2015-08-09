//still having trouble getting my actual game to work
//now that it is somewhat integrated into my HTML

'use strict'

  var coolGame = function(){
    this.wins = 0;
    this.startGame = function(){
    this.playoffThreshold = 88;
      //console.log(playoffThreshold)
      guess = prompt('The Mariners will need to win this many games to make the playoffs. Take a swing.');
      };
     this.checkAnswer = function(){
      reGuess = function(){
      var message = alert('C\'mon, they can win at least 70. Try again.');
      guess = prompt('The Mariners will need to win this many games to make the playoffs. Take a swing.');
      playoffThreshold = 88;
    }
      while (guess < 70) {
        guess = reGuess();
      if (guess >= 70) {
        break;
      } else {
        reGuess();
        }
      }
      if (guess >= playoffThreshold) {
      message = 'October baseball! Mariners should be a playoff team.';
     } else {
      message = 'Does not look like the Mariners will be a playoff team. Maybe the Mariner Moose should become the new owner.';
      }

    if(guess != playoffThreshold) {
      var result = document.getElementById('result');
      result.innerHTML = 'Try again, dummy.';
    }
    else if(guess == playoffThreshold){
        var result = document.getElementById('result');
        result.innerHTML = 'Does not look like the Mariners will be a playoff team. Maybe the Mariner Moose should become the new owner.';
      }
  }
}
var game1 = new coolGame();
    game1.startGame();
    game1.checkAnswer();

//note to self
//JS console is saying line 11:guess is not defined. why!?

