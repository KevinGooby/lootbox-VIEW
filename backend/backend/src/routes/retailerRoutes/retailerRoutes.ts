import { RetailerController } from '../../controller/RetailerController/RetailerController';
import { retailerUserAuthorization } from '../../middleware/retailerUserAuth';

export const retailerRoutes = [
  {
    method: 'get',
    route: '/retailers',
    controller: RetailerController,
    action: 'retailers',
    middleware: [retailerUserAuthorization],
  },
  {
    method: 'get',
    route: '/retailers/:retailerId/stamps',
    controller: RetailerController,
    action: 'retailerStamp',
    middleware: [retailerUserAuthorization],
  },
  {
    method: 'put',
    route: '/retailers/:retailerId',
    controller: RetailerController,
    action: 'updateRetailerInfo',
    middleware: [retailerUserAuthorization],
  },
  {
    method: 'put',
    route: '/retailers/:retailerId/loyalty',
    controller: RetailerController,
    action: 'updateUserLoyaltyPoints',
    middleware: [retailerUserAuthorization],
  },
];
