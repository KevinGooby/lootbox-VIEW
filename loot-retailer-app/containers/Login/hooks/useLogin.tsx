import { postLogin } from '@/api/auth';
import { ROUTES } from '@/constants/routing';
import { UserLoginPayload } from '@/types/user';
import { asyncErrorHandler } from '@/utils/asyncErrorHandler';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

type UseLoginProps = () => {
  isLoading: boolean;
  signIn: (payload: UserLoginPayload) => void;
};

export const useLogin: UseLoginProps = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (payload: UserLoginPayload) => {
    setIsLoading(true);

    const { data } = await asyncErrorHandler({
      asyncFunction: async () => postLogin(payload),
      messages: {
        errorMessage: 'Oops! There was an issue logging in',
      },
      onSuccess: () => router.push(ROUTES.DASHBOARD),
      onError: () =>
        toast.error('Oops! There was an issue logging in', {
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
    signIn,
  };
};
