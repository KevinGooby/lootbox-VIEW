import { RegisterPayload, UserLoginPayload } from '@/types/user';
import { post } from '@/utils/authApi';
import { API_URL } from './constants';

export const postLogin = (loginPayload: UserLoginPayload) =>
  post({
    path: `${API_URL}/api/auth/retailer/login`,
    body: loginPayload,
  });

export const postSignUp = (signUpPayload: RegisterPayload) =>
  post({
    path: `${API_URL}/api/auth/retailer/admin/register`,
    body: signUpPayload,
  });

export const postLogout = () =>
  post({
    path: `${API_URL}/api/auth/retailer/logout`,
  });
