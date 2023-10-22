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
          image="https://ucarecdn.com/32352264-91a3-410f-a6f6-0fa7a748cc44/"
        />

        <Styled.CardContentContainer>{cardContent}</Styled.CardContentContainer>
      </Styled.CardActionAreaContainer>
    </Styled.CardContainer>
  );
};
