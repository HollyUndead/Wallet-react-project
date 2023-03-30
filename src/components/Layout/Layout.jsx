import { Outlet } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import { Balance } from 'components/Balance/Balance';
import { Navigation } from 'components/Navigation/Navigation';
import styled from 'styled-components';

export const Layout = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      <h2>Header</h2>
      <aside>
        <Wraper>
          <Navigation />
          {isDesktopOrLaptop && <Balance />}
        </Wraper>
        {isDesktopOrLaptop && <p>Currency</p>}
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
