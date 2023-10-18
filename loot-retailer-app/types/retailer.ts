import { Industry, LoyaltyTypeEnum } from '@/containers/SignUp/constants';

export type Retailer = {
  id: string;
  created_at: string;
  updated_at: string;
  businessName: string;
  businessPhoneNumber: string;
  industry: Industry;
  category: string;
  loyaltyType: LoyaltyTypeEnum;
};

export type RetailerPayload = Omit<
  Retailer,
  'id' | 'created_at' | 'updated_at'
>;
