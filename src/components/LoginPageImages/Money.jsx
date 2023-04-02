import styled from 'styled-components';
import MoneyDesk1x from '../../images/SpareLoginRegister/Money/MoneyDesk1x.png';
import MoneyDesk2x from '../../images/SpareLoginRegister/Money/MoneyDesk2x.png';
import MoneyTab1x from '../../images/SpareLoginRegister/Money/MoneyTab1x.png';
import MoneyTab2x from '../../images/SpareLoginRegister/Money/MoneyTab2x.png';

import Rotate from 'react-reveal/Rotate';

export const Money = () => {
  return (
    <MoneyWrapper>
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
        />{' '}
        <Rotate top right>
          <img src={MoneyDesk1x} width="74" alt="start page" />
        </Rotate>
      </picture>
    </MoneyWrapper>
  );
};

const MoneyWrapper = styled.div`
  position: absolute;
  top: 102px;
  right: 0;
  @media screen and (min-width: 1280px) {
    top: 171px;
    right: 0;
  }
`;
