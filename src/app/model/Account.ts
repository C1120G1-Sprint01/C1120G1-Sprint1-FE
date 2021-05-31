import {User} from './User';

export interface Account {
  username: string;
  password: string;
  register_date: string;
  user: User;
}
