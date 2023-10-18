import { useAuth } from '@/hooks/useAuth';
import { Retailer } from '@/types/retailer';
import { User } from '@/types/user';
import Cookies from 'js-cookie';
import { ReactElement, createContext } from 'react';

export type AuthContextProps = {
  isUserAuthenticated: boolean;
  user: User | null;
  retailers: Retailer[];
};

type ModalProviderProps = {
  children: ReactElement;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const retailerAccessToken = Cookies.get('retailer_user_access_token');
  const isUserAuthenticated = !!retailerAccessToken;

  const { user, retailers } = useAuth(isUserAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        isUserAuthenticated,
        user,
        retailers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
