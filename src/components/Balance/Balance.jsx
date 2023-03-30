import styled from 'styled-components';
// import { useSelector } from '@reduxjs/toolkit';

export const Balance = () => {
  // const currentBalance = useSelector(state => state.finance.totalBalance);
  const currentBalance = '24 000.00';
  return (
    <Wrapper>
      <Text>Your balance</Text>
      <Count>
        <Simbol>₴</Simbol> {currentBalance}
      </Count>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 248px;
  height: 80px;
  display: inline-block;
  padding-left: 32px;
  text-align: left;
  background-color: lightblue;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    width: 296px;
    padding-left: 40px;
  }
  @media screen and (min-width: 1200px) {
    width: 355px;
  }
`;

const Text = styled.p`
  padding-top: 8px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;

  color: #a6a6a6;
`;

const Count = styled.p`
  padding-bottom: 11px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const Simbol = styled.span`
  font-weight: 400;
  padding-right: 8px;
`;
