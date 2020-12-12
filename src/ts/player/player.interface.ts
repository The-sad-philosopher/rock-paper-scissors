interface Player {
  readonly id: string;
  readonly name: string;
  selection: [value: string, index: number];
  score: number;
}

export default Player;
