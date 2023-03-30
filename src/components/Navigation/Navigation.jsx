import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => {
  return (
    <>
      <StyledLink to="/">☀️ Home</StyledLink>
      <StyledLink to="/diagram">😉 Statistics</StyledLink>
      <StyledLink to="/currency">🌟 Currency</StyledLink>
    </>
  );
};

const StyledLink = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  gap: 25px;
  align-items: center;

  color: #000000;

  &.active {
    font-weight: 700;
  }
`;
