interface Player {
  readonly id: string;
  readonly name: string;
  selection: [value: string, index: number];
  score: number;

  incrementPlayerScore(player: Player, playerTwo?: Player): void;
}

export default Player;
