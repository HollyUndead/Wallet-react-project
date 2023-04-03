import styled from 'styled-components';
import BigLoginSpotDesk1x from '../../images/SpareLoginRegister/Spot/BigLoginSpotDesk1x.png';
import BigLoginSpotDesk2x from '../../images/SpareLoginRegister/Spot/BigLoginSpotDesk2x.png';
import BigLoginSpotTab1x from '../../images/SpareLoginRegister/Spot/BigLoginSpotTab1x.png';
import BigLoginSpotTab2x from '../../images/SpareLoginRegister/Spot/BigLoginSpotTab2x.png';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`

  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }


`;

export const RegSpot = () => {
  return (
    <SpotWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${BigLoginSpotDesk1x} 1x, ${BigLoginSpotDesk2x} 2x`}
            width="396"
            height="57"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${BigLoginSpotTab1x} 1x, ${BigLoginSpotTab2x} 2x`}
            width="240"
            height="35"
            media="(min-width: 768px)"
          />
          <img src={BigLoginSpotDesk1x} width="396" alt="start page" />
        </picture>
      </Reveal>
    </SpotWrapper>
  );
};

const SpotWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 11px;
  @media screen and (min-width: 1280px) {
    bottom: 0px;
    right: 18px;
  }
`;
