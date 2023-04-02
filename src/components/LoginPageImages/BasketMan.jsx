import styled from 'styled-components';
import BasketManDesk1x from '../../images/login/BasketMan/BasketManDesk1x.png';
import BasketManDesk2x from '../../images/login/BasketMan/BasketManDesk2x.png';
import BasketManTab1x from '../../images/login/BasketMan/BasketManTab1x.png';
import BasketManTab2x from '../../images/login/BasketMan/BasketManTab2x.png';

import LightSpeed from 'react-reveal/LightSpeed';

export const BasketMan = () => {
  return (
    <BasketManWrapper>
      <picture>
        <source
          srcSet={`${BasketManDesk1x} 1x, ${BasketManDesk2x} 2x`}
          width="260"
          height="360"
          media="(min-width:1280px)"
        />
        <source
          srcSet={`${BasketManTab1x} 1x, ${BasketManTab2x} 2x`}
          width="155"
          height="215"
          media="(min-width: 768px)"
        />{' '}
        <LightSpeed right>
          <img src={BasketManDesk1x} width="260" alt="start page" />
        </LightSpeed>
      </picture>
    </BasketManWrapper>
  );
};

const BasketManWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  right: 16px;
  @media screen and (min-width: 1280px) {
    bottom: 5px;
    right: 27px;
  }
`;
