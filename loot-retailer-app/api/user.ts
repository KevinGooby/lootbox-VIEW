import { get } from '@/utils/authApi';
import { API_URL } from './constants';

export const getMe = () =>
  get({
    path: `${API_URL}/api/users/me`,
  });
