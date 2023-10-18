import { ROUTES } from '@/constants/routing';
import { z } from 'zod';

export const NAV_VALUES = [
  {
    name: 'Dashboard',
    route: ROUTES.DASHBOARD,
  },
  {
    name: 'test',
    route: ROUTES.DASHBOARD,
  },
  {
    name: 'test',
    route: ROUTES.DASHBOARD,
  },
  {
    name: 'test',
    route: ROUTES.DASHBOARD,
  },
];

export const SIDE_WIDTH = '20%';

export const createStampSchema = z.object({
  name: z.string().min(2),
  visitsNeededPerRedemption: z.number().min(1),
  discountPercentage: z.number().min(1),
  redemptionCheckpoints: z.number().min(1),
});

export const createStampMap = {
  name: 'name',
  visitsNeededPerRedemption: 'visitsNeededPerRedemption',
  discountPercentage: 'discountPercentage',
  redemptionCheckpoints: 'redemptionCheckpoints',
};
