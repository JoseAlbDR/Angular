export type Color = 'red' | 'black' | 'blue' | 'green' | 'yellow';

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
