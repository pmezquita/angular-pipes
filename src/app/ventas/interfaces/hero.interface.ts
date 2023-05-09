export type sortByType = keyof Hero | '';

export enum Color {
  red, black, blue, green
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
