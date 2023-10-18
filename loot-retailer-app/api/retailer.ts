import { get } from '@/utils/authApi';
import { API_URL } from './constants';

export const getMyRetailers = () =>
  get({
    path: `${API_URL}/api/retailers`,
  });
