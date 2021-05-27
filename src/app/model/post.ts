import {Status} from "./status";
import {ChildCategory} from "./childCategory";
import {Province} from "./province";
import {User} from "./user";
import {Image} from "./image";

export interface Post {
  postId: number;
  posterName: string;
  phone: string;
  email: string;
  address: string;
  title: string;
  postType: bigint;
  postDateTime: string;
  status: Status;
  enable: bigint;
  childCategory: ChildCategory;
  price: number;
  description: string;
  province: Province;
  user: User;
  imageSet: Image[];
}
