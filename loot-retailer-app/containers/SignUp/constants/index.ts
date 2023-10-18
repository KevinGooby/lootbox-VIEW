export const signUpMap = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
};

export type YourDetailsType = typeof signUpMap;

export const signUpBusinessDetailsMap = {
  businessName: 'businessName',
  businessPhoneNumber: 'businessPhoneNumber',
  industry: 'industry',
  category: 'category',
};

export type BusinessDetailsType = typeof signUpBusinessDetailsMap;

export const signUpBusinessDetailsAddressMap = {
  street: 'street',
  province: 'province',
  unit: 'unit',
  postalCode: 'postalCode',
  city: 'city',
  country: 'country',
};

export type AddressDetailsType = typeof signUpBusinessDetailsAddressMap;

export const SIGN_UP_FLOWS = {
  YOUR_DETAILS: 'YOUR_DETAILS',
  BUSINESS_DETAILS: 'BUSINESS_DETAILS',
  ADDRESS_DETAILS: 'ADDRESS_DETAILS',
  LOYALTY_DETAILS: 'LOYALTY_DETAILS',
} as const;

export enum Industry {
  AGENCY = 'Agency',
  AUTOMOTIVE = 'Automotive',
  HAIR_BEAUTY = 'Hair & Beauty',
  ENTERTAINMENT = 'Entertainment',
  HEALTH_FITNESS = 'Health & Fitness',
  HOME_GARDEN = 'Home & Garden',
  FOOD_BEVERAGE = 'Food & Beverage',
  SPORTS_RECREATION = 'Sports & Recreation',
  TRAINING_EDUCATION = 'Training & Education',
  TRAVEL_TOURISM = 'Travel & Tourism',
  OTHER = 'Other',
}

export const industryOptions = Object.values(Industry).map((value) => ({
  label: value,
  value: value,
}));

export const category = {
  [Industry.AGENCY]: ['Advertising', 'Marketing', 'Public Relations', 'Other'],
  [Industry.AUTOMOTIVE]: [
    'Auto Parts & Accessories',
    'Auto Repair & Maintenance',
    'Auto Sales',
    'Other',
  ],
  [Industry.HAIR_BEAUTY]: [
    'Barbershop',
    'Beauty Salon',
    'Hair Salon',
    'Nail Salon',
    'Spa',
    'Other',
  ],
  [Industry.ENTERTAINMENT]: [
    'Amusement Park',
    'Art Gallery',
    'Casino',
    'Movie Theater',
    'Museum',
    'Night Club',
    'Other',
  ],
  [Industry.HEALTH_FITNESS]: [
    'Dentist',
    'Doctor',
    'Gym',
    'Hospital',
    'Pharmacy',
    'Physical Therapy',
    'Other',
  ],
  [Industry.HOME_GARDEN]: [
    'Appliances',
    'Cleaning Services',
    'Furniture',
    'Home Improvement',
    'Landscaping',
    'Other',
  ],
  [Industry.FOOD_BEVERAGE]: [
    'Bakery',
    'Bar',
    'Cafe',
    'Catering',
    'Restaurant',
    'Other',
  ],
  [Industry.SPORTS_RECREATION]: [
    'Golf Course',
    'Gym',
    'Park',
    'Stadium',
    'Other',
  ],
  [Industry.TRAINING_EDUCATION]: [
    'College',
    'Day Care',
    'Elementary School',
    'High School',
    'University',
    'Other',
  ],
  [Industry.TRAVEL_TOURISM]: ['Hotel', 'Motel', 'Resort', 'Other'],
  [Industry.OTHER]: ['Other'],
};

export const categoryOptions = (industry: Industry) =>
  (category[industry] || []).map((value) => ({
    label: value,
    value: value,
  }));

export type SignUpFlowsType = keyof typeof SIGN_UP_FLOWS;

export enum LoyaltyTypeEnum {
  POINTS = 'Points',
  STAMPS = 'Stamps',
}
