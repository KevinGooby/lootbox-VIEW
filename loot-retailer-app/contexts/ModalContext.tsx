import { Modal } from '@/constants/modal';
import { createContext, ReactElement, useState } from 'react';

export type ModalContextProps = {
  activeModal: Modal | null;
  setActiveModal: React.Dispatch<React.SetStateAction<Modal | null>>;
  clearActiveModal: () => void;
  activeModalData: Record<string, unknown>;
  setActiveModalData: React.Dispatch<
    React.SetStateAction<Record<string, unknown>>
  >;
};

type ModalProviderProps = {
  children: ReactElement;
};

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  //support stacking of modal in the future, i.e, pushModal, popModal
  const [activeModal, setActiveModal] = useState<Modal | null>(null);
  const [activeModalData, setActiveModalData] = useState<
    Record<string, unknown>
  >({});

  const clearActiveModal = () => {
    setActiveModal(null);
    setActiveModalData({});
  };

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        setActiveModal,
        clearActiveModal,
        activeModalData,
        setActiveModalData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
