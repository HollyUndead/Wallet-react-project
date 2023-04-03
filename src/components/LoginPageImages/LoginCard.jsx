import styled from 'styled-components';
import CardDesk1x from '../../images/login/Card/CardDesk1x.png';
import CardDesk2x from '../../images/login/Card/CardDesk2x.png';
import CardTab1x from '../../images/login/Card/CardTab1x.png';
import CardTab2x from '../../images/login/Card/CardTab2x.png';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
0% {
    -webkit-transform: translateX(450px) rotate(540deg);
            transform: translateX(450px) rotate(540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }

`;
export const LoginCard = () => {
  return (
    <LoginCardWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${CardDesk1x} 1x, ${CardDesk2x} 2x`}
            width="144"
            height="97"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${CardTab1x} 1x, ${CardTab2x} 2x`}
            width="86"
            height="58"
            media="(min-width: 768px)"
          />{' '}
          <img src={CardDesk1x} width="144" alt="start page" />
        </picture>
      </Reveal>
    </LoginCardWrapper>
  );
};

const LoginCardWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 13px;
  @media screen and (min-width: 1280px) {
    right: 22px;
  }
`;
