import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Balance } from 'components/Balance/Balance';
import { Navigation } from 'components/Navigation/Navigation';

import { Header } from 'components/Header/Header';
import background from '../../img/bg-images/bg-image-desktop.png';
import styled from 'styled-components';

export const Layout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      <Header />
      <Container>
        <Aside>
          <Wraper>
            <Navigation />
            {isDesktopOrLaptop && <Balance />}
          </Wraper>
          {isDesktopOrLaptop && <p>Currency</p>}
        </Aside>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${background});
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 32px;
  padding: 15px 20px 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 32px 32px 0px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    padding: 40px 70px 63px 16px;

    border-right: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const OutletContainer = styled.div`
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0px 16px 0px 70px;
  }
`;
