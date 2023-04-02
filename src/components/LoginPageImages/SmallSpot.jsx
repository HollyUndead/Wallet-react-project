import styled from 'styled-components';
import BigLoginSpotDesk1x from '../../images/SpareLoginRegister/Spot/BigLoginSpotDesk1x.png';
import BigLoginSpotDesk2x from '../../images/SpareLoginRegister/Spot/BigLoginSpotDesk2x.png';
import BigLoginSpotTab1x from '../../images/SpareLoginRegister/Spot/BigLoginSpotTab1x.png';
import BigLoginSpotTab2x from '../../images/SpareLoginRegister/Spot/BigLoginSpotTab2x.png';

import Slide from 'react-reveal/Slide';

export const SmallLoginSpot = () => {
  return (
    <SmallSpotWrapper>
      <picture>
        <source
          srcSet={`${BigLoginSpotDesk1x} 1x, ${BigLoginSpotDesk2x} 2x`}
          width="106"
          height="20"
          media="(min-width:1280px)"
        />
        <source
          srcSet={`${BigLoginSpotTab1x} 1x, ${BigLoginSpotTab2x} 2x`}
          width="63"
          height="12"
          media="(min-width: 768px)"
        />{' '}
        <Slide bottom>
          <img src={BigLoginSpotDesk1x} width="106" alt="start page" />
        </Slide>
      </picture>
    </SmallSpotWrapper>
  );
};

const SmallSpotWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 1px;
  @media screen and (min-width: 1280px) {
    bottom: 27px;
  }
`;
