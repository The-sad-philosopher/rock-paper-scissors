import { hotModuleReplacement } from './hotModuleReplacement'; // * dev server req
import Game from './game/game.model';
import Player from './player/player.model';
import Computer from './player/computer.model';

const playerName = Player.getPlayerName();

const playerOne = new Player(`${playerName}`);
const playerTwo = new Computer();
const game = new Game();
game.playGame([playerOne, playerTwo]);
hotModuleReplacement(); // * dev server req
