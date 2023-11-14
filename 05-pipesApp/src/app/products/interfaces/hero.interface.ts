export type Color =
  | 'red'
  | 'lightblack'
  | 'lightblue'
  | 'lightgreen'
  | 'lightyellow';

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
