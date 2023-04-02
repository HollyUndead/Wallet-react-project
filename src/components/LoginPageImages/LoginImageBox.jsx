import React from 'react';
import styled from 'styled-components';

import { LoginCard } from './LoginCard';
import { Money } from './Money';
import { SmallLoginSpot } from './SmallSpot';
import { BigLoginSpot } from './Spot';
import { Basket } from './Basket';
import { PhoneLog } from './PhoneLog';
import { Vase } from './Vase';
import { BasketMan } from './BasketMan';

export const LoginImageBox = () => {
  return (
    <ImageWrapper>
      <LoginCard />
      <Money />
      <SmallLoginSpot />
      <BigLoginSpot />
      <Basket />
      <PhoneLog />
      <Vase />
      <BasketMan />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;

  width: 260px;
  height: 250px;

  @media screen and (min-width: 1280px) {
    width: 435px;
    height: 419px;
  }
`;
