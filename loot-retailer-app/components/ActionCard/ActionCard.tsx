import * as Styled from './ActionCard.styles';
import { ActionCardProps } from './ActionCard.props';

export const ActionCard = ({
  imageHeight,
  cardContent,
  cardValue,
  currentValue,
  setValue,
  height,
}: ActionCardProps) => {
  return (
    <Styled.CardContainer isSelect={currentValue === cardValue} height={height}>
      <Styled.CardActionAreaContainer onClick={() => setValue(cardValue)}>
        <Styled.CardImage
          //@ts-expect-error
          height={imageHeight}
          component="img"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png"
        />

        <Styled.CardContentContainer>{cardContent}</Styled.CardContentContainer>
      </Styled.CardActionAreaContainer>
    </Styled.CardContainer>
  );
};
