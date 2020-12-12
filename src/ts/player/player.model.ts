import Game from '../game/game.model';
import IPlayer from './player.interface';
const shortid = require('shortid');
class Player implements IPlayer {
  readonly id: string = shortid.generate();
  selection: IPlayer['selection'] = ['', 0];
  score = 0;

  constructor(public readonly name: string) {}

  static incrementPlayerScore(player: IPlayer, playerTwo?: IPlayer) {
    player.score++;
    if (playerTwo) playerTwo.score++;
  }
  static getPlayerName() {
    const name = prompt('Hello there. Enter your name:');
    return name;
  }
  getPlayerChoice() {
    let choice = prompt(`Enter your choice, ${this.name}.`);
    if (choice) {
      choice = choice.toLowerCase();
      if (!Game.choices.includes(choice)) {
        console.log(`Invalid choice. Try again...`);
        this.getPlayerChoice();
      }
      const index = Game.choices.indexOf(choice);
      this.selection = [choice, index];
    }
  }
}

export default Player;
