import styled from 'styled-components';
import RollDesk1x from '../../images/registration/Roll/RollDesk1x.png';
import RollDesk2x from '../../images/registration/Roll/RollDesk2x.png';
import RollTab1x from '../../images/registration/Roll/RollTab1x.png';
import RollTab2x from '../../images/registration/Roll/RollTab2x.png';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
 0% {
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
`;
export const Roll = () => {
  return (
    <RollWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${RollDesk1x} 1x, ${RollDesk2x} 2x`}
            width="134"
            height="179"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${RollTab1x} 1x, ${RollTab2x} 2x`}
            width="81"
            height="109"
            media="(min-width: 768px)"
          />
          <img src={RollDesk1x} width="134" alt="start page" />
        </picture>
      </Reveal>
    </RollWrapper>
  );
};

const RollWrapper = styled.div`
  position: absolute;
  bottom: 14px;
  left: 24px;
  @media screen and (min-width: 1280px) {
    bottom: 25px;
    left: 40px;
  }
`;
