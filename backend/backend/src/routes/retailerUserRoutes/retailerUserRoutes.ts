import { RetailerUserController } from '../../controller/RetailerUserController/RetailerUserController';
import { retailerUserAuthorization } from '../../middleware/retailerUserAuth';

export const retailerUserRoutes = [
  {
    method: 'get',
    route: '/retailerUsers',
    controller: RetailerUserController,
    action: 'all',
    middleware: [retailerUserAuthorization],
  },
  {
    method: 'post',
    route: '/retailerUsers/retailerUser',
    controller: RetailerUserController,
    action: 'createRetailerUserForRetailer',
    middleware: [retailerUserAuthorization],
  },
  {
    method: 'delete',
    route: '/retailerUsers/:retailerUserId',
    controller: RetailerUserController,
    action: 'deleteRetailerUserForRetailer',
    middleware: [retailerUserAuthorization],
  },
];
