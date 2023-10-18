import { JSXElementConstructor, ReactElement } from 'react';
import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';

type AppContextProviderProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};
