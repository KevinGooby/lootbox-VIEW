import { SignUp } from '@/containers/SignUp';
import { SignUpProvider } from '@/containers/SignUp/context/SignUpContext';
import React from 'react';

const SignUpPage = () => {
  return (
    <SignUpProvider>
      <SignUp />
    </SignUpProvider>
  );
};

export default SignUpPage;
