export enum UserRoleEnum {
  HR = 'HR',
  EATERS = 'EATERS',
  PRAYER_WARRIORS = 'PRAYER_WARRIORS',
  GREETERS = 'GREETERS',
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRoleEnum;
  password: string;
};
