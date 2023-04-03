import styled from 'styled-components';
import MoneyDesk1x from '../../images/SpareLoginRegister/Money/MoneyDesk1x.png';
import MoneyDesk2x from '../../images/SpareLoginRegister/Money/MoneyDesk2x.png';
import MoneyTab1x from '../../images/SpareLoginRegister/Money/MoneyTab1x.png';
import MoneyTab2x from '../../images/SpareLoginRegister/Money/MoneyTab2x.png';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
   0% {
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }

`;

export const MoneyReg = () => {
  return (
    <MoneyWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${MoneyDesk1x} 1x, ${MoneyDesk2x} 2x`}
            width="74"
            height="74"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${MoneyTab1x} 1x, ${MoneyTab2x} 2x`}
            width="44"
            height="44"
            media="(min-width: 768px)"
          />
          <img src={MoneyDesk1x} width="74" alt="start page" />
        </picture>
      </Reveal>
    </MoneyWrapper>
  );
};

const MoneyWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 17px;
  @media screen and (min-width: 1280px) {
    top: 0;
    right: 27px;
  }
`;
