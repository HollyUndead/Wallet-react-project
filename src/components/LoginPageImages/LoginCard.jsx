import styled from 'styled-components';
import CardDesk1x from '../../images/login/Card/CardDesk1x.png';
import CardDesk2x from '../../images/login/Card/CardDesk2x.png';
import CardTab1x from '../../images/login/Card/CardTab1x.png';
import CardTab2x from '../../images/login/Card/CardTab2x.png';

import Rotate from 'react-reveal/Rotate';

export const LoginCard = () => {
  return (
    <LoginCardWrapper>
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
        <Rotate top right>
          <img src={CardDesk1x} width="144" alt="start page" />
        </Rotate>
      </picture>
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
