import styled from 'styled-components';
import WomanDesk1x from '../../images/registration/Woman/WomanDesk1x.png';
import WomanDesk2x from '../../images/registration/Woman/WomanDesk2x.png';
import WomanTab1x from '../../images/registration/Woman/WomanTab1x.png';
import WomanTab2x from '../../images/registration/Woman/WomanTab2x.png';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
   0% {
    -webkit-transform: translateX(400px);
            transform: translateX(400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;
export const Woman = () => {
  return (
    <WomanWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${WomanDesk1x} 1x, ${WomanDesk2x} 2x`}
            width="143"
            height="358"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${WomanTab1x} 1x, ${WomanTab2x} 2x`}
            width="87"
            height="217"
            media="(min-width: 768px)"
          />
          <img src={WomanDesk1x} width="143" alt="start page" />
        </picture>
      </Reveal>
    </WomanWrapper>
  );
};

const WomanWrapper = styled.div`
  position: absolute;
  bottom: 12px;
  right: 21px;
  @media screen and (min-width: 1280px) {
    bottom: 20px;
    right: 35px;
  }
`;
