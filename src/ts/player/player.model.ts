import IPlayer from './player.interface';
const shortid = require('shortid');
class Player implements IPlayer {
  readonly id: string = shortid.generate();
  score = 0;

  constructor(
    public readonly name: string,
    public selection: IPlayer['selection']
  ) {}

  static incrementPlayerScore(player: IPlayer, playerTwo?: IPlayer) {
    player.score++;
    if (playerTwo) playerTwo.score++;
  }
}

export default Player;
