import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Icon = styled.svg`
  width: 30px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.5;
  color: black;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
