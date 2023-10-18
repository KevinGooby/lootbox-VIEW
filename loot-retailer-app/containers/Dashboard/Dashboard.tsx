import { ModalContext, ModalContextProps } from '@/contexts';
import * as Styled from './Dashboard.styles';
import { CreateStampCard } from './components/CreateStampCard';
import { GetStartedModal } from './components/GetStartedModal';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardProvider } from './context/DashboardContext';

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <Styled.Container>
        <Sidebar />
        <Styled.MainContainer>
          <Header />
          <CreateStampCard />
        </Styled.MainContainer>
      </Styled.Container>
      <GetStartedModal />
    </DashboardProvider>
  );
};
