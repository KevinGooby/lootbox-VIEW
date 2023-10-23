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

export const Category = {
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

export enum BusinessType {
  PHYSICAL_LOCATION = 'Physical Location',
  TAKEAWAY_DELIVERY = 'Takeaway/Delivery',
  MOBILE_BUSINESS = 'Mobile Business',
  ONLINE_BUSINESS = 'Online Business',
}

export enum LoyaltyType {
  POINTS = 'Points',
  STAMPS = 'Stamps',
}