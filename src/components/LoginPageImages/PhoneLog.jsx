import styled from 'styled-components';
import PhoneLogDesk1x from '../../images/login/PhoneLog/PhoneLogDesk1x.png';
import PhoneLogDesk2x from '../../images/login/PhoneLog/PhoneLogDesk2x.png';
import PhoneLogTab1x from '../../images/login/PhoneLog/PhoneLogTab1x.png';
import PhoneLogTab2x from '../../images/login/PhoneLog/PhoneLogTab2x.png';

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

export const PhoneLog = () => {
  return (
    <PhoneLogWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true}>
        <picture>
          <source
            srcSet={`${PhoneLogDesk1x} 1x, ${PhoneLogDesk2x} 2x`}
            width="193"
            height="363"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${PhoneLogTab1x} 1x, ${PhoneLogTab2x} 2x`}
            width="115"
            height="216"
            media="(min-width: 768px)"
          />{' '}
          <img src={PhoneLogDesk1x} width="193" alt="start page" />
        </picture>
      </Reveal>
    </PhoneLogWrapper>
  );
};

const PhoneLogWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 95px;
  @media screen and (min-width: 1280px) {
    bottom: 35px;
    right: 159px;
  }
`;
