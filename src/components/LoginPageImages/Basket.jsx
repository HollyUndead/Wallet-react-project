import styled from 'styled-components';
import BasketDesk1x from '../../images/login/Basket/BasketDesk1x.png';
import BasketDesk2x from '../../images/login/Basket/BasketDesk2x.png';
import BasketTab1x from '../../images/login/Basket/BasketTab1x.png';
import BasketTab2x from '../../images/login/Basket/BasketTab2x.png';

import Rotate from 'react-reveal/Rotate';

export const Basket = () => {
  return (
    <BasketWrapper>
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
        />{' '}
        <Rotate top left>
          <img src={BasketDesk1x} width="74" alt="start page" />
        </Rotate>
      </picture>
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
