import styled from 'styled-components';
import BasketDesk1x from '../../images/login/Basket/BasketDesk1x.png';
import BasketDesk2x from '../../images/login/Basket/BasketDesk2x.png';
import BasketTab1x from '../../images/login/Basket/BasketTab1x.png';
import BasketTab2x from '../../images/login/Basket/BasketTab2x.png';

import { keyframes } from '@emotion/css';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
   0% {
    transform: rotate(-45deg);
    transform-origin: 100% 100%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }

`;
export const Basket = () => {
  return (
    <BasketWrapper>
      <Reveal keyframes={customAnimation} triggerOnce={true} delay={500}>
        <picture>
          <source
            srcSet={`${BasketDesk1x} 1x, ${BasketDesk2x} 2x`}
            width="74"
            height="74"
            media="(min-width:1280px)"
          />
          <source
            srcSet={`${BasketTab1x} 1x, ${BasketTab2x} 2x`}
            width="44"
            height="44"
            media="(min-width: 768px)"
          />
          <img src={BasketDesk1x} width="74" alt="start page" />
        </picture>
      </Reveal>
    </BasketWrapper>
  );
};

const BasketWrapper = styled.div`
  position: absolute;
  top: 65px;
  left: 12px;
  @media screen and (min-width: 1280px) {
    top: 109px;
    left: 19px;
  }
`;
