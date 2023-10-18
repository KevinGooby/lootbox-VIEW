import { SIGN_UP_FLOWS } from '@/containers/SignUp/constants';
import * as Styled from './SignUpSteps.styles';
import _ from 'lodash';
import { SignUpStepsProps } from './SignUpSteps.props';
import { useWindowResize } from '@/hooks/useWindowResize';

export const SignUpSteps = ({ currentFlow }: SignUpStepsProps) => {
  const formatFlows = Object.values(SIGN_UP_FLOWS).map((flow) => {
    return {
      isCurrentFlow: flow === currentFlow,
      formattedText: _.lowerCase(flow.replaceAll('_', ' ')),
    };
  });
  const { isTablet } = useWindowResize();

  return (
    <Styled.Container isTablet={isTablet}>
      {formatFlows.map((flow, index) => {
        return (
          <Styled.Text
            key={flow.formattedText}
            isCurrentFlow={flow.isCurrentFlow}
          >
            {index + 1}. {flow.formattedText}
          </Styled.Text>
        );
      })}
    </Styled.Container>
  );
};
