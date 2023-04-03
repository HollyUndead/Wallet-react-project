import VaseRegDesk1x from '../../images/registration/VaseReg/VaseRegDesk1x.png';
import VaseRegDesk2x from '../../images/registration/VaseReg/VaseRegDesk2x.png';
import VaseRegTab1x from '../../images/registration/VaseReg/VaseRegTab1x.png';
import VaseRegTab2x from '../../images/registration/VaseReg/VaseRegTab2x.png';

import styled from 'styled-components';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
0% {
    transform: translateY(-100px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`;

export const VaseReg = () => {
  return (
    <VaseRegWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${VaseRegDesk1x} 1x, ${VaseRegDesk2x} 2x`}
            width="123"
            height="241"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${VaseRegTab1x} 1x, ${VaseRegTab2x} 2x`}
            width="74"
            height="146"
            media="(min-width: 768px)"
          />
          <img src={VaseRegDesk1x} width="123" alt="start page" />
        </picture>
      </Reveal>
    </VaseRegWrapper>
  );
};

const VaseRegWrapper = styled.div`
  position: absolute;
  bottom: 45px;
  left: 17px;
  @media screen and (min-width: 1280px) {
    bottom: 76px;
    left: 24px;
  }
`;

// const Test = styled(Reveal)`
//   animation: all 1.1s 5s both;
// `;
