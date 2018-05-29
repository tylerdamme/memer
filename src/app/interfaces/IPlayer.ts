import { ICard } from './ICard';

export interface IPlayer {
  uid: string;
  fullName: string;
  username: string;
  photoURL: string;
  thumbnailURL: string;
  isActive: boolean;
  score: number;
  captions: ICard[];
  captionPlayed?: ICard;
}
