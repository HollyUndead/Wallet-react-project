import styled from 'styled-components';

import { Woman } from './RegistrationWoman';
import { MoneyReg } from './MoneyReg';
import { RegSpot } from './RegSpot';
import { PhoneReg } from './PhoneReg';
import { VaseReg } from './VaseReg';
import { Roll } from './Roll';

export const RegistrationImageBox = () => {
  return (
    <ImageWrapper>
      <MoneyReg />
      <RegSpot />
      <PhoneReg />
      <VaseReg />
      <Woman />
      <Roll />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;

  width: 260px;
  height: 250px;

  @media screen and (min-width: 1280px) {
    width: 452px;
    height: 412px;
  }
`;
