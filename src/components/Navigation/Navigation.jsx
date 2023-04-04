import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Icons from '../../img/nav-icons/symbol-defs.svg';
import styled from 'styled-components';

export const Navigation = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <Nav>
      <StyledLink to="/">
        <Icon>
          <use href={`${Icons}#icon-home`}></use>
        </Icon>
        {!isMobile && 'Home'}
      </StyledLink>
      <StyledLink to="/diagram">
        <Icon>
          <use href={`${Icons}#icon-diagram`}></use>
        </Icon>
        {!isMobile && 'Statistics'}
      </StyledLink>
      {isMobile && (
        <StyledLink to="/currency">
          {' '}
          <Icon>
            <use href={`${Icons}#icon-currency`}></use>
          </Icon>
        </StyledLink>
      )}
    </Nav>
  );
};
const Icon = styled.svg`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  fill: #6e78e8;
  background-color: #fff;
  transition: all 200ms linear;

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    border-radius: 2px;
  }
`;
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
  transition: all 200ms linear;
  &.active {
    font-weight: 700;
  }
  &.active > svg,
  &:hover > svg,
  &:focus > svg {
    fill: #4a56e2;
    box-shadow: 0px 6px 25px -3px rgba(110, 120, 232, 1);
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
