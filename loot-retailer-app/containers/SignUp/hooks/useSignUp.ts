import { useState } from 'react';
import { RegisterPayload, User } from '@/types/user';
import { Retailer, RetailerPayload } from '@/types/retailer';
import { asyncErrorHandler } from '@/utils/asyncErrorHandler';
import { postSignUp } from '@/api/auth';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routing';
import { toast } from 'react-toastify';

type UserSignUpProps = () => {
  isLoading: boolean;
  signUp: (payload: RegisterPayload & { retailer: RetailerPayload }) => void;
};

export const useSignUp: UserSignUpProps = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (
    payload: RegisterPayload & {
      retailer: RetailerPayload;
    }
  ) => {
    setIsLoading(true);

    const { data } = await asyncErrorHandler({
      asyncFunction: async () => postSignUp(payload),
      messages: {
        errorMessage: 'Oops! There was an issue create the account',
      },
      onSuccess: () => {
        router.push(ROUTES.DASHBOARD);
      },
      onError: () =>
        toast.error('Oops! There was an issue Signing up', {
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
    signUp,
  };
};
