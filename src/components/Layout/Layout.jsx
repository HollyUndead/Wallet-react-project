import { Outlet } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import { Balance } from 'components/Balance/Balance';
import { Navigation } from 'components/Navigation/Navigation';
import styled from 'styled-components';
import { Header } from 'components/Header/Header';
import { Currency } from 'components/Currency/Currency';

export const Layout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      <Header />
      <aside>
        <Wraper>
          <Navigation />
          {isDesktopOrLaptop && <Balance />}
        </Wraper>
        {isDesktopOrLaptop && <Currency />}
      </aside>

      <Outlet />
    </>
  );
};

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
