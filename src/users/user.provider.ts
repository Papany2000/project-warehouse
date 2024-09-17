import { USERS_REPOSITORY } from '@/core/database/constant';
import { User } from './users.model';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useValue: User,
  },
];
