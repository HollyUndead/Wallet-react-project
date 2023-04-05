import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Balance } from 'components/Balance/Balance';
import { Navigation } from 'components/Navigation/Navigation';

import { Header } from 'components/Header/Header';

import backgroundDesktop from '../../img/bg-images/bg-image-desktop.png';
import backgroundTablet from '../../img/bg-images/bg-image-tablet.png';
import backgroundDesktopRetina from '../../img/bg-images/bg-image-desktop-2x.png';
import backgroundTabletRetina from '../../img/bg-images/bg-image-tablet-2x.png';
import styled from 'styled-components';

import { Currency } from 'components/Currency/Currency';

export const Layout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <Container>
      <Header />

      <AsideContainer>
        <Aside>
          <Wraper>
            <Navigation />
            {isDesktopOrLaptop && <Balance />}
          </Wraper>
          {isDesktopOrLaptop && <Currency />}
        </Aside>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </AsideContainer>
    </Container>
  );
};

const Container = styled.div`
  @media screen and (min-width: 768px) {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(${backgroundTablet});
    background-attachment: fixed;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundTabletRetina});
    }
  }
  @media screen and (min-width: 768px) {
    background-size: cover;
    background-image: url(${backgroundDesktop});
    background-attachment: fixed;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundDesktopRetina});
    }
  }
`;
const AsideContainer = styled.div`
  min-height: calc(100vh - 77px);
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
    justify-content: space-between;
    align-items: flex-end;
    padding: 32px 32px 0px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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
    padding: 0 32px;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    padding: 0px 16px 0px 70px;
  }
`;
