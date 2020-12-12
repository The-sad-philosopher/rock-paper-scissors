import IPlayer from '../player/player.interface';

interface Game {
  round: number;
  getWinner(players: [IPlayer, IPlayer]): IPlayer[];
  playRound(players: [IPlayer, IPlayer]): void;
  playGame(players: [IPlayer, IPlayer]): void;
}

export default Game;
