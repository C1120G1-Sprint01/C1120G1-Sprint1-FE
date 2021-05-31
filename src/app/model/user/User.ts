import {Account} from "./Account";
import {Ward} from "./Ward/Ward";

export class User {
  userId: number;
  name: string;
  username:string;
  email: string;
  phone: string;
  ward :Ward;
  avatar :string;
  account :Account;
  gender: string;
  birthDay: string;
}
