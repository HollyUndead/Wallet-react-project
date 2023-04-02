import VaseDesk1x from '../../images/login/Vase/VaseDesk1x.png';
import VaseDesk2x from '../../images/login/Vase/VaseDesk2x.png';
import VaseTab1x from '../../images/login/Vase/VaseTab1x.png';
import VaseTab2x from '../../images/login/Vase/VaseTab2x.png';

import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';

export const Vase = () => {
  return (
    <VaseWrapper>
      <picture>
        <source
          srcSet={`${VaseDesk1x} 1x, ${VaseDesk2x} 2x`}
          width="95"
          height="186"
          media="(min-width:1280px)"
        />
        <source
          srcSet={`${VaseTab1x} 1x, ${VaseTab2x} 2x`}
          width="56"
          height="111"
          media="(min-width: 768px)"
        />{' '}
        <Bounce top>
          <img src={VaseDesk1x} width="95" alt="start page" />
        </Bounce>
      </picture>
    </VaseWrapper>
  );
};

const VaseWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 1;
  @media screen and (min-width: 1280px) {
    bottom: 35px;
  }
`;
