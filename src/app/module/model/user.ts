import {Ward} from './ward';
import {AccountApp} from './account-app';

export interface User {
  userId: number;
  name: string;
  phone: string;
  email: string;
  avatarUrl: string;
  ward: Ward;
  account: AccountApp;
}
