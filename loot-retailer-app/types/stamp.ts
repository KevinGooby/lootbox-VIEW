export type Stamp = {
  id: string;
  name: string;
  visitsNeededPerRedemption: number;
  discountPercentage: number;
  redemptionCheckpoints: number[];
  created_at: Date;
  updated_at: Date;
  retailerId: string;
};

export type StampPayload = Omit<Stamp, 'id' | 'created_at' | 'updated_at'>;
