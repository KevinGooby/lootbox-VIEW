import { LinearProgressBar } from '@/components/LinearProgressBar';
import * as Styled from './CreateStampCard.styles';
import { useContext } from 'react';
import { ModalContext, ModalContextProps } from '@/contexts';
import { Modal } from '@/constants/modal';

export const CreateStampCard = () => {
  const { setActiveModal } = useContext(ModalContext) as ModalContextProps;

  return (
    <Styled.Container>
      <Styled.Header variant="h6">Create your stamp card</Styled.Header>
      <Styled.ProgressBarContainer>
        <LinearProgressBar hasLabel />
      </Styled.ProgressBarContainer>
      <Styled.StartButton handleClick={() => setActiveModal(Modal.GET_STARTED)}>
        Start
      </Styled.StartButton>
      <Styled.HelperText variant="body1">
        Want help getting started? Check out our set up guide
      </Styled.HelperText>
    </Styled.Container>
  );
};
