import * as Styled from '@/containers/SignUp/styles/SignupDetails.styles';
import { SignUpContext } from '../../context/SignUpContext';
import { useContext } from 'react';
import React from 'react';
import { Typography } from '@/components/Typography';
import { LoyaltyTypeEnum } from '../../constants';
import { useWindowResize } from '@/hooks/useWindowResize';

export const LoyaltyDetails = () => {
  const {
    onPreviousClick,
    loyaltyDetails,
    setLoyaltyDetails,
    onCreateAccount,
  } = useContext(SignUpContext);
  const { isDesktop, isTablet } = useWindowResize();

  return (
    <Styled.Container isTablet={isTablet}>
      <Styled.CenterRowContainer
        style={{ marginBottom: '30px' }}
        isDesktop={isDesktop}
      >
        <Styled.ActionCardContainer
          cardValue={LoyaltyTypeEnum.STAMPS}
          currentValue={loyaltyDetails}
          imageHeight="200"
          height="250px"
          setValue={(value) => setLoyaltyDetails(value as LoyaltyTypeEnum)}
          cardContent={
            <>
              <Styled.TitleText variant="h6">Stamps</Styled.TitleText>
              <Typography variant="body1">
                Stamps Insert details about this loyalty program here. Insert
                details about this loyalty program here. Insert details about
                this loyalty program here. Insert details about this loyalty
                program here.
              </Typography>
            </>
          }
        />

        <Styled.ActionCardContainer
          cardValue={LoyaltyTypeEnum.POINTS}
          currentValue={loyaltyDetails}
          setValue={(value) => setLoyaltyDetails(value as LoyaltyTypeEnum)}
          imageHeight="200"
          height="250px"
          cardContent={
            <>
              <Styled.TitleText variant="h6">Points</Styled.TitleText>
              <Typography variant="body1">
                Stamps Insert details about this loyalty program here. Insert
                details about this loyalty program here. Insert details about
                this loyalty program here. Insert details about this loyalty
                program here.
              </Typography>
            </>
          }
        />
      </Styled.CenterRowContainer>

      <Styled.ButtonContainer>
        <Styled.StyledButton handleClick={onPreviousClick}>
          Previous
        </Styled.StyledButton>
        <Styled.StyledButton handleClick={onCreateAccount}>
          Sign Up
        </Styled.StyledButton>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
