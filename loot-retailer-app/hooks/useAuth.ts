import { getMyRetailers } from '@/api/retailer';
import { getStampsCall } from '@/api/stamp';
import { getMe } from '@/api/user';
import { Retailer } from '@/types/retailer';
import { Stamp } from '@/types/stamp';
import { User } from '@/types/user';
import { asyncErrorHandler } from '@/utils/asyncErrorHandler';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type UseAuthProps = (isUserAuthenticated: boolean) => {
  isLoading: boolean;
  getUser: () => void;
  user: User | null;
  retailers: Retailer[];
  stamps: Stamp[];
};

export const useAuth: UseAuthProps = (isUserAuthenticated) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [retailers, setRetailers] = useState<Retailer[]>([]);
  const [currentRetailer, setCurrentRetailer] = useState<Retailer | null>(null);
  const [stamps, setStamps] = useState([]);

  const getUser = async () => {
    setIsLoading(true);

    const { data } = await asyncErrorHandler({
      asyncFunction: async () => getMe(),
      messages: {
        errorMessage: 'Oops! There was an issue getting user info',
      },
      onSuccess: () => {},
      onError: () =>
        toast.error('Oops! There was an issue getting user info', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'colored',
        }),
    });

    setUser(data);
    setIsLoading(false);
  };

  const getRetailers = async () => {
    setIsLoading(true);

    const { data } = await asyncErrorHandler({
      asyncFunction: async () => getMyRetailers(),
      messages: {
        errorMessage: 'Oops! There was an issue getting retailers',
      },
      onSuccess: () => {},
      onError: () =>
        toast.error('Oops! There was an issue getting retailers', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'colored',
        }),
    });

    setCurrentRetailer(data[0]);
    setRetailers(data);
    setIsLoading(false);
  };

  const getStamps = async () => {
    setIsLoading(true);

    const { data } = await asyncErrorHandler({
      asyncFunction: async () => getStampsCall(currentRetailer?.id || ''),
      messages: {
        errorMessage:
          'Oops! There was an issue getting the stamps associated to the retailer',
      },
      onSuccess: () => {},
      onError: () =>
        toast.error(
          'Oops! There was an issue getting the stamps associated to the retailer',
          {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: 'colored',
          }
        ),
    });

    setStamps(data);
    console.log('Test: stamp: ', data);
  };

  useEffect(() => {
    if (isUserAuthenticated) {
      getUser();
      getRetailers();
    }
  }, [isUserAuthenticated]);

  useEffect(() => {
    if (currentRetailer) {
      getStamps();
    }
  }, [currentRetailer]);

  return {
    isLoading,
    getUser,
    user,
    retailers,
    stamps,
  };
};
