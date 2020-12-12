import IPlayer from '../player/player.interface';
import IGame from './game.interface';
import Player from '../player/player.model';
import Computer from '../player/computer.model';

class Game implements IGame {
  static choices = ['rock', 'paper', 'scissor'];
  round: number = 0;

  getWinner([playerOne, playerTwo]: [IPlayer, IPlayer]) {
    let winner: IPlayer[];
    const indexDifference = Math.abs(
      playerOne.selection[1] - playerTwo.selection[1]
    );
    // selection being the array that contains [0 -> value, 1 -> index]
    if (!indexDifference) {
      // tie
      winner = [playerOne, playerTwo];
    } else if (indexDifference === 1) {
      // rock <- paper <- scissor
      winner =
        playerOne.selection[1] > playerTwo.selection[1]
          ? [playerOne]
          : [playerTwo];
    } else {
      // rock -> scissor
      winner =
        playerOne.selection[1] < playerTwo.selection[1]
          ? [playerOne]
          : [playerTwo];
    }
    return winner;
  }
  playRound([playerOne, playerTwo]: [IPlayer, IPlayer]) {
    console.log(`Round ${this.round}:`);
    console.log(`${playerOne.name}'s choice: ${playerOne.selection[0]}`);
    console.log(`${playerTwo.name}'s choice: ${playerTwo.selection[0]}`);
    const winner = this.getWinner([playerOne, playerTwo]);
    if (winner.length === 1) {
      console.log(`${winner[0].name} wins.`);
      Player.incrementPlayerScore(winner[0]);
    } else {
      console.log(`It's a tie.`);
      Player.incrementPlayerScore(winner[0], winner[1]);
    }
    console.log(`${playerOne.name}'s score: ${playerOne.score}`);
    console.log(`${playerTwo.name}'s score: ${playerTwo.score}`);
  }
  playGame([playerOne, playerTwo]: [IPlayer, Computer]) {
    while (playerOne.score < 5 && playerTwo.score < 5) {
      playerOne.getPlayerChoice();
      playerTwo.getRandomChoice();
      this.round++;
      this.playRound([playerOne, playerTwo]);
    }
    console.log(`Game over.`);
    console.log(`Final scores:`);
    console.log(`${playerOne.name}: ${playerOne.score}`);
    console.log(`${playerTwo.name}: ${playerTwo.score}`);
    const winnerName =
      playerOne.score > playerTwo.score ? playerOne.name : playerTwo.name;
    console.log(`${winnerName} wins the game.`);
    console.log(`Wanna play again?...`);
  }
}

export default Game;
