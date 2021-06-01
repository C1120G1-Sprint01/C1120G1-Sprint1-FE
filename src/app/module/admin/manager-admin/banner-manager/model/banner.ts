import {Size} from './size';
import {Position} from './position';

export interface Banner {
  bannerId: number;
  duration: any;
  image: string;
  position: Position;
  size: Size;
}
