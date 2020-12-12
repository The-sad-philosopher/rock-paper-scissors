import IPlayer from '../player/player.interface';
import IGame from './game.interface';

class Game implements IGame {
  static choices = ['rock', 'paper', 'scissor'];
  round: number = 0;

  playRound([playerOne, playerTwo]: [IPlayer, IPlayer]) {
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
  playGame(players: [IPlayer, IPlayer]) {
    /**
     * 1. keep track of player scores
     * 2. keep playing rounds till a player
     *      achieves a minimum score of 5
     * 3. declare winner
     */
  }
}

export default Game;
