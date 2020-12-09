import { hotModuleReplacement } from './hotModuleReplacement';
import { Player } from './player';

const choices = ['rock', 'paper', 'scissor'];

let player: Player = {
  name: 'Tom',
  selection: {
    value: 'scissor',
    index: 0,
  },
};
let computer: Player = {
  name: 'Computer',
  selection: {
    value: computerPlay(),
    index: 0,
  },
};

playRoundAgainstComputer(player, computer);

function generateError(message: string): never {
  throw new Error(message);
}

function getRandomIndex(length: number) {
  if (!length) generateError('Add some more choices.'); // * Zero check *
  return Math.floor(Math.random() * 1000) % length;
}

function setIndex(player: Player) {
  player.selection.index = choices.indexOf(player.selection.value);
}

function computerPlay(): string {
  const randomIndex = getRandomIndex(choices.length);
  return choices[randomIndex];
}

function getWinner(playerOne: Player, playerTwo: Player) {
  let result: string;
  const indexDifference = Math.abs(
    playerOne.selection.index - playerTwo.selection.index
  );
  /**
   ** Logic being that ['rock', 'paper', 'scissor'] being in the order they are,
   **  are in a way, that (n+1) always beats n, for instance, paper beats rock &
   **  scissor beats paper. The only other remaining case is n & (n+2) in which
   **  n wins; i.e. rock and scissor where rock beats scissor.
   **/
  if (!indexDifference) {
    result = `It's a Tie.`;
  } else if (indexDifference === 1) {
    result =
      playerOne.selection.index > playerTwo.selection.index
        ? `${playerOne.name} won!`
        : `${playerTwo.name} won!`;
  } else {
    result =
      playerOne.selection.index < playerTwo.selection.index
        ? `${playerOne.name} won!`
        : `${playerTwo.name} won!`;
  }
  return result;
}

function playRoundAgainstComputer(player: Player, computer: Player) {
  setIndex(player);
  setIndex(computer);
  const result = getWinner(player, computer);
  console.debug(`Player Selection is ${player.selection.value}`);
  console.debug(`Computer Selection is ${computer.selection.value}`);
  console.debug(result);
}

hotModuleReplacement();
