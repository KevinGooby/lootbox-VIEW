import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

import * as Styled from './Modal.styles';

type ModalProps = {
  title?: JSX.Element | string;
  isOpen: boolean;
  onClose: (event?: KeyboardEvent | React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
  showExitButton?: boolean;
};

export const Modal = ({
  className,
  showExitButton = true,
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) => {
  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose(e);
    }
  };

  // this useEffect is to add the keydown event to the window, adding a keydown event to the div wrapper
  // of this modal will not work as it is not in focus / inaccessible when the modal is opened
  useEffect(() => {
    // we don't want to mount the keydown event listener if a modal is not opened
    // or else they will be listening to the whole window even if a modal is closed
    if (!isOpen) {
      return;
    }

    // close modal when `esc` key is pressed
    window.addEventListener('keydown', handleEscapeKeyDown);

    // clean up after the modal is closed so the listener is no longer listening to the window
    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [isOpen]);

  return isOpen ? (
    <Styled.Wrapper
      onClick={(e) => {
        onClose(e);
      }}
      isOpen={isOpen}
    >
      <Styled.Modal
        className={className}
        onClick={(e) => e.stopPropagation()}
        id="clutch-modal"
      >
        <Styled.Header>
          {typeof title === 'string' ? <h4>{title}</h4> : title}
          {showExitButton && (
            <Styled.ExitButton
              handleClick={(e) => {
                onClose(e);
              }}
            >
              <CloseIcon />
            </Styled.ExitButton>
          )}
        </Styled.Header>
        <section>{children}</section>
      </Styled.Modal>
    </Styled.Wrapper>
  ) : (
    <></>
  );
};
