import { StampPayload } from '@/types/stamp';
import { API_URL } from './constants';
import { get, post } from '@/utils/authApi';

export const postStamp = (stampPayload: StampPayload) =>
  post({
    path: `${API_URL}/api/stamps`,
    body: stampPayload,
  });

export const getStampsCall = (retailerId: string) =>
  get({
    path: `${API_URL}/api/retailers/${retailerId}/stamps`,
  });
