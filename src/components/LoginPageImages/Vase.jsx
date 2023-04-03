import VaseDesk1x from '../../images/login/Vase/VaseDesk1x.png';
import VaseDesk2x from '../../images/login/Vase/VaseDesk2x.png';
import VaseTab1x from '../../images/login/Vase/VaseTab1x.png';
import VaseTab2x from '../../images/login/Vase/VaseTab2x.png';

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

export const Vase = () => {
  return (
    <VaseWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${VaseDesk1x} 1x, ${VaseDesk2x} 2x`}
            width="95"
            height="186"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${VaseTab1x} 1x, ${VaseTab2x} 2x`}
            width="56"
            height="111"
            media="(min-width: 768px)"
          />
          <img src={VaseDesk1x} width="95" alt="start page" />
        </picture>
      </Reveal>
    </VaseWrapper>
  );
};

const VaseWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 1;
  @media screen and (min-width: 1280px) {
    bottom: 35px;
  }
`;

// const Test = styled(Reveal)`
//   animation: all 1.1s 5s both;
// `;
