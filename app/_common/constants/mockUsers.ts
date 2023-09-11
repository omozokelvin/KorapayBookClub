import { User, UserRoleEnum } from '@/app/_common/types/User';

const randomId = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

export const mockUsers: Array<User> = [
  {
    id: randomId(),
    firstName: 'Kelvin',
    lastName: 'Omozokpia',
    email: 'kelvinjune2@gmail.com',
    password: 'strongPassword',
    role: UserRoleEnum.HR,
  },
  {
    id: randomId(),
    firstName: 'Himra',
    lastName: 'Jitsu',
    email: 'kiyoshi@gmail.com',
    password: 'strongPassword',
    role: UserRoleEnum.EATERS,
  },
  {
    id: randomId(),
    firstName: 'Himra',
    lastName: 'Jitsu',
    email: 'kiyoshi2@gmail.com',
    password: 'strongPassword',
    role: UserRoleEnum.PRAYER_WARRIORS,
  },
];
