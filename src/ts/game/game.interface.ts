import IPlayer from '../player/player.interface';

interface Game {
  round: number;
  playRound(players: [IPlayer, IPlayer]): void;
  playGame(players: [IPlayer, IPlayer]): void;
}

export default Game;
