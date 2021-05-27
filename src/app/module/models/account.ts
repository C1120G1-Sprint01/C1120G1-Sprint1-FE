export class Account {
  userName: string;
  password: string;
  registerDate: string;
}

export class AccountRole {
  accountRoleId: number;
  account: Account;
  role: Role;
}

export class Role {
  roleId: number;
  roleName: string;
}
