export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: Roles;
  created_at: string;
  updated_at: string;
};

export type UserLoginPayload = Pick<User, 'email' | 'password'>;

export type RegisterPayload = Omit<User, 'id' | 'created_at' | 'updated_at'>;
