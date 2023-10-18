import { postLogout } from '@/api/auth';
import { ROUTES } from '@/constants/routing';
import { asyncErrorHandler } from '@/utils/asyncErrorHandler';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

type UseLogoutProps = () => {
  isLoading: boolean;
  logout: () => void;
};

export const useLogout: UseLogoutProps = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);

    await asyncErrorHandler({
      asyncFunction: async () => postLogout(),
      messages: {
        errorMessage: 'Oops! There was an issue logging out',
      },
      onSuccess: () => router.push(ROUTES.LOGIN),
      onError: () =>
        toast.error('Oops! There was an issue logging out', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'colored',
        }),
    });
    setIsLoading(false);
  };

  return {
    isLoading,
    logout,
  };
};
