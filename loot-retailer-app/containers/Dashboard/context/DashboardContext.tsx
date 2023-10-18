import { createContext, useContext } from 'react';
import { useStamp } from '../hooks/useStamp';
import { AuthContext, AuthContextProps } from '@/contexts';
import { StampPayload } from '@/types/stamp';

export type DashboardContextProps = {
  createStamp: (payload: StampPayload) => void;
  isLoading: boolean;
};

type DashboardProviderProps = {
  children: React.ReactNode;
};

export const DashboardContext = createContext({} as DashboardContextProps);

export const DashboardProvider: React.FC<DashboardProviderProps> = ({
  children,
}: DashboardProviderProps) => {
  const { retailers, user } = useContext(AuthContext) as AuthContextProps;

  const { isLoading, createStamp } = useStamp({ retailers, user });

  return (
    <DashboardContext.Provider
      value={{
        createStamp,
        isLoading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
