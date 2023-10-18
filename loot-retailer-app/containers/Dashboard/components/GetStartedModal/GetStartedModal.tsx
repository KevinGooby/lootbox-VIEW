import { Modal } from '@/components/Modal';
import { ModalContext, ModalContextProps } from '@/contexts';
import { useContext } from 'react';
import { Modal as ModalEnum } from '@/constants/modal';
import * as Styled from './GetStartedModal.styles';
import { GetStartedForm } from '../GetStartedForm';

export const GetStartedModal = () => {
  const { activeModal, clearActiveModal } = useContext(
    ModalContext
  ) as ModalContextProps;

  const isOpen = activeModal === ModalEnum.GET_STARTED;

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={clearActiveModal} title="Create Stamp Card">
      <Styled.Container>
        <GetStartedForm />
      </Styled.Container>
    </Modal>
  );
};
