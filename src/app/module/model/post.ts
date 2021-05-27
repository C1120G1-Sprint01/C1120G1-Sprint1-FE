import {Status} from './status';
import {ChildCategory} from './child-category';
import {Ward} from './ward';
import {User} from './user';
import {Image} from './image';

export interface Post {
  postId: number;
  posterName: string;
  phone: string;
  email: string;
  title: string;
  postType: boolean;
  postDateTime: string;
  enabled: boolean;
  price: number;
  description: string;
  status: Status;
  childCategory: ChildCategory;
  ward: Ward;
  user: User;
  imageSet: Image[];
}
