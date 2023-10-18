import { postStamp } from '@/api/stamp';
import { Retailer } from '@/types/retailer';
import { StampPayload } from '@/types/stamp';
import { User } from '@/types/user';
import { asyncErrorHandler } from '@/utils/asyncErrorHandler';
import { useState } from 'react';
import { toast } from 'react-toastify';

type UseStampParams = {
  retailers: Retailer[];
  user: User | null;
};

type UseStampProps = ({ retailers, user }: UseStampParams) => {
  isLoading: boolean;
  createStamp: (payload: StampPayload) => void;
};

export const useStamp: UseStampProps = ({ retailers, user }) => {
  const [isLoading, setIsLoading] = useState(false);

  const createStamp = async (payload: StampPayload) => {
    setIsLoading(true);

    const { data } = await asyncErrorHandler({
      asyncFunction: async () =>
        postStamp({
          ...payload,
          retailerId: retailers[0].id,
        }),
      messages: {
        errorMessage: 'Oops! There was an issue create the stamp',
      },
      onSuccess: () => {},
      onError: () =>
        toast.error('Oops! There was an issue creating stamp', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'colored',
        }),
    });

    console.log('stamp: data: ', data);

    setIsLoading(false);
  };

  return {
    isLoading,
    createStamp,
  };
};
