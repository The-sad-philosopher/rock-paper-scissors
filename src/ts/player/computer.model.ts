import Game from '../game/game.model';
import Player from './player.model';
class Computer extends Player {
  static computerName = 'All Powerful AI';
  constructor() {
    super(Computer.computerName);
  }

  getRandomIndex(length: number) {
    return Math.floor(Math.random() * 1000) % length;
  }
  getRandomChoice() {
    const randomIndex = this.getRandomIndex(Game.choices.length);
    const choice = Game.choices[randomIndex];
    const index = Game.choices.indexOf(choice);
    this.selection = [choice, index];
  }
}

export default Computer;
