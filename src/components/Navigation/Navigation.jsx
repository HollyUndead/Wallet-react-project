import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

export const Navigation = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 320px)',
  });
  return (
    <Nav>
      <StyledLink to="/">☀️ {!isMobile && 'Home'}</StyledLink>
      <StyledLink to="/diagram">😉 {!isMobile && 'Statistics'}</StyledLink>
      {isMobile && <StyledLink to="/currency">🌟</StyledLink>}
    </Nav>
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

const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;
