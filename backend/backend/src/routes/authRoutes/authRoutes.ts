import { AuthController } from '../../controller/AuthController/AuthController';

/*
ROUTES format:
-> method: which request to listen for 
-> route: from which URL
-> controller: which controller we want to get our business logic from
-> action: what function we want to do from our controller
*/
export const authRoutes = [
  {
    method: 'post',
    route: '/auth/login',
    controller: AuthController,
    action: 'login',
  },
  {
    method: 'post',
    route: '/auth/register',
    controller: AuthController,
    action: 'register',
  },
  {
    method: 'post',
    route: '/auth/logout',
    controller: AuthController,
    action: 'logout',
  },

  {
    method: 'post',
    route: '/auth/retailer/login',
    controller: AuthController,
    action: 'retailerLogin',
  },
  {
    method: 'post',
    route: '/auth/retailer/admin/register',
    controller: AuthController,
    action: 'retailerAdminRegister',
  },
  {
    method: 'post',
    route: '/auth/retailer/logout',
    controller: AuthController,
    action: 'retailerLogout',
  },
];
