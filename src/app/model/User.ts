import {Account} from "./Account";
import {Ward} from "./Ward";

export interface User {
  user_id: number;
  email: string;
  name: string;
  phone: string;
  account: Account;
  ward: Ward;
}
