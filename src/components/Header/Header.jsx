import React from 'react';
import { Logo } from './Logo';
import { RxExit } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'redux/operations';
import { selectUserName } from 'redux/Auth/authSelector';

export const Header = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <header>
      <HeaderContainer>
        <Link href="/home">
          <Logo />
          <p>Wallet</p>
        </Link>
        <ProfileContainer>
          <ProfileFlex>
            <IconContext.Provider
              value={{
                color: '#bdbdbd',
                className: 'global-class-name',
                size: '18px',
              }}
            >
              <ProfileSpan>{useSelector(selectUserName)}</ProfileSpan>
            </IconContext.Provider>
          </ProfileFlex>
          <IconContext.Provider
            value={{ className: 'global-class-name', size: '24px' }}
          >
            <Button type="button" onClick={handleLogOut}>
              <RxExit />
              <ButtonSpan>Exit</ButtonSpan>
            </Button>
          </IconContext.Provider>
        </ProfileContainer>
      </HeaderContainer>
    </header>
  );
};

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background: #ffffff;
`;

const ProfileContainer = styled.div`
  display: flex;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
`;

const ProfileFlex = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 27px;
  text-align: right;
  color: #bdbdbd;
`;

const ProfileSpan = styled.span`
  display: flex;
  padding-right: 12px;
  border-right: 1px solid;
  @media screen and (max-width: 760px) {
    border-right: 0;
    padding-right: 8px;
  }
`;

const Button = styled.button`
  font-size: 18px;
  line-height: 27px;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #bdbdbd;
  display: flex;
  transition: color 0.3s ease;
  gap: 8px;
  @media screen and (max-width: 760px) {
    padding: 0;
  }
`;
const ButtonSpan = styled.span`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Link = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #000000;
  display: flex;
  align-items: center;
  gap: 18px;
  svg {
    @media screen and (max-width: 760px) {
      width: 30px;
      height: 30px;
    }
  }
  p {
    @media screen and (max-width: 760px) {
      font-size: 25px;
    }
  }
`;
