import {Account} from './account';
import {Ward} from './address';

export class User {
  userId: number;
  email: string;
  name: string;
  phone: string;
  account: Account;
  ward: Ward;
}
