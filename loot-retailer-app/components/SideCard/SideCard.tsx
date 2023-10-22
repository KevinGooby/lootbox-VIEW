import * as Styled from './SideCard.styles';

export const SideCard = () => {
  return (
    <Styled.SideCard>
      <Styled.LogoContainer>LOOT</Styled.LogoContainer>
      <Styled.SloganContainer>
        <Styled.SloganText variant="h4">
          One Stamp at a Time!
        </Styled.SloganText>
      </Styled.SloganContainer>
    </Styled.SideCard>
  );
};
