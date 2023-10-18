import { UserController } from '../../controller/UserController/UserController.js';
import { retailerUserAuthorization } from '../../middleware/retailerUserAuth';

export const userRoutes = [
  {
    method: 'get',
    route: '/users/me',
    controller: UserController,
    action: 'me',
    middleware: [retailerUserAuthorization],
  },
];
