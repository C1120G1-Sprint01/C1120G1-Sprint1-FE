import {User} from './user';

export interface AccountApp {
  username: string;
  password: string;
  registerDate: string;
  user: User;
}
