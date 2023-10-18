import { Dispatch, SetStateAction, createContext, useState } from 'react';
import {
  AddressDetailsType,
  BusinessDetailsType,
  LoyaltyTypeEnum,
  SIGN_UP_FLOWS,
  SignUpFlowsType,
  YourDetailsType,
} from '../constants';
import { useSignUp } from '../hooks/useSignUp';
import { RegisterPayload, Roles } from '@/types/user';
import { RetailerPayload } from '@/types/retailer';

export type SignUpContextProps = {
  flow: SignUpFlowsType | null;
  yourDetails: YourDetailsType;
  businessDetails: BusinessDetailsType;
  addressDetails: Omit<AddressDetailsType, 'unit'> & {
    unit?: number;
  };
  onNextClick: () => void;
  onPreviousClick: () => void;
  loyaltyDetails: LoyaltyTypeEnum;
  setLoyaltyDetails: Dispatch<SetStateAction<LoyaltyTypeEnum>>;
  setYourDetails: Dispatch<SetStateAction<YourDetailsType>>;
  setBusinessDetails: Dispatch<SetStateAction<BusinessDetailsType>>;
  setAddressDetails: Dispatch<
    SetStateAction<
      Omit<AddressDetailsType, 'unit'> & {
        unit?: number;
      }
    >
  >;
  setFlow: Dispatch<SetStateAction<SignUpFlowsType | null>>;
  isLoading: boolean;
  onCreateAccount: () => void;
};

type SignUpProviderProps = {
  children: React.ReactNode;
};

export const SignUpContext = createContext({} as SignUpContextProps);

export const SignUpProvider: React.FC<SignUpProviderProps> = ({
  children,
}: SignUpProviderProps) => {
  const [flow, setFlow] = useState<SignUpFlowsType | null>(
    SIGN_UP_FLOWS.YOUR_DETAILS
  );
  const [yourDetails, setYourDetails] = useState<YourDetailsType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [businessDetails, setBusinessDetails] = useState<BusinessDetailsType>({
    businessName: '',
    businessPhoneNumber: '',
    industry: '',
    category: '',
  });
  const [addressDetails, setAddressDetails] = useState<
    Omit<AddressDetailsType, 'unit'> & {
      unit?: number;
    }
  >({
    street: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
  });
  const [loyaltyDetails, setLoyaltyDetails] = useState<LoyaltyTypeEnum>(
    LoyaltyTypeEnum.STAMPS
  );

  const { isLoading, signUp } = useSignUp();

  const onNextClick = () => {
    switch (flow) {
      case SIGN_UP_FLOWS.YOUR_DETAILS:
        setFlow(SIGN_UP_FLOWS.BUSINESS_DETAILS);
        break;
      case SIGN_UP_FLOWS.BUSINESS_DETAILS:
        setFlow(SIGN_UP_FLOWS.ADDRESS_DETAILS);
        break;
      case SIGN_UP_FLOWS.ADDRESS_DETAILS:
        setFlow(SIGN_UP_FLOWS.LOYALTY_DETAILS);
        break;
    }
  };

  const onPreviousClick = () => {
    switch (flow) {
      case SIGN_UP_FLOWS.BUSINESS_DETAILS:
        setFlow(SIGN_UP_FLOWS.YOUR_DETAILS);
        break;
      case SIGN_UP_FLOWS.ADDRESS_DETAILS:
        setFlow(SIGN_UP_FLOWS.BUSINESS_DETAILS);
        break;
      case SIGN_UP_FLOWS.LOYALTY_DETAILS:
        setFlow(SIGN_UP_FLOWS.ADDRESS_DETAILS);
        break;
    }
  };

  const onCreateAccount = () => {
    const payload = {
      ...yourDetails,
      retailer: {
        ...businessDetails,
        loyaltyType: loyaltyDetails,
      },
      address: addressDetails,
      role: Roles.ADMIN,
    } as RegisterPayload & {
      retailer: RetailerPayload;
      address: Omit<AddressDetailsType, 'unit'> & {
        unit?: number;
      };
    };

    signUp(payload);
  };

  return (
    <SignUpContext.Provider
      value={{
        addressDetails,
        onNextClick,
        onPreviousClick,
        flow,
        yourDetails,
        businessDetails,
        loyaltyDetails,
        setLoyaltyDetails,
        setYourDetails,
        setBusinessDetails,
        setAddressDetails,
        setFlow,
        isLoading,
        onCreateAccount,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
