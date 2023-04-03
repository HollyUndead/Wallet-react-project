import styled from 'styled-components';
import PhoneRegDesk1x from '../../images/registration/PhoneReg/PhoneRegDesk1x.png';
import PhoneRegDesk2x from '../../images/registration/PhoneReg/PhoneRegDesk2x.png';
import PhoneRegTab1x from '../../images/registration/PhoneReg/PhoneRegTab1x.png';
import PhoneRegTab2x from '../../images/registration/PhoneReg/PhoneRegTab2x.png';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-6px);
            transform: translateX(-6px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(6px);
            transform: translateX(6px);
  }
  80% {
    -webkit-transform: translateX(5px);
            transform: translateX(5px);
  }
  90% {
    -webkit-transform: translateX(-5px);
            transform: translateX(-5px);
  }


`;

export const PhoneReg = () => {
  return (
    <PhoneRegWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true}>
        <picture>
          <source
            srcSet={`${PhoneRegDesk1x} 1x, ${PhoneRegDesk2x} 2x`}
            width="200"
            height="360"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${PhoneRegTab1x} 1x, ${PhoneRegTab2x} 2x`}
            width="121"
            height="216"
            media="(min-width: 768px)"
          />{' '}
          <img src={PhoneRegDesk1x} width="200" alt="start page" />
        </picture>
      </Reveal>
    </PhoneRegWrapper>
  );
};

const PhoneRegWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 76px;
  @media screen and (min-width: 1280px) {
    top: 10px;
    right: 126px;
  }
`;
