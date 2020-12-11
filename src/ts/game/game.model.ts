import IPlayer from '../player/player.interface';
import IGame from './game.interface';

class Game implements Game {
  round: number = 0;
  playRound(players: [IPlayer, IPlayer]) {
    // logic
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
