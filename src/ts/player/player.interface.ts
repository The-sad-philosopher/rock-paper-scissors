interface Player {
  readonly id: string;
  readonly name: string;
  selection: [value: string, index: number];
  score: number;

  getPlayerChoice(): void;
}

export default Player;
