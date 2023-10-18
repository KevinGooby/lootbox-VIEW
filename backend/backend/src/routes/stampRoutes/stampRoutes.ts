import { StampController } from '../../controller/StampController/StampController';
import { retailerUserAuthorization } from '../../middleware/retailerUserAuth';

export const stampRoutes = [
  {
    method: 'post',
    route: '/stamps',
    controller: StampController,
    middleware: [retailerUserAuthorization],
    action: 'create',
  },
];
