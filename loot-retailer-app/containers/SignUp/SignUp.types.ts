import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});

export const signUpBusinessDetailsSchema = z.object({
  businessName: z.string().min(2),
  businessPhoneNumber: z.string().min(2),
  industry: z.string().min(2),
  category: z.string().min(2),
});

export const addressSchema = z.object({
  street: z.string().min(2),
  unit: z.string().optional(),
  postalCode: z.string().min(2),
  province: z.string().min(2),
  city: z.string().min(2),
  country: z.string().min(2),
});
