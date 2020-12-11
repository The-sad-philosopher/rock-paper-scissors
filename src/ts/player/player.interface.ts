interface Player {
  readonly id: number;
  readonly name: string;
  selection: [value: string, index: number];
  score: number;

  incrementPlayerScore(player: Player, playerTwo?: Player): void;
}

export default Player;
