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
        <div>
          <Navigation />
          {isDesktopOrLaptop && <Balance />}
        </div>
        {isDesktopOrLaptop && <p>Currency</p>}
        <p>Currency</p>
      </aside>

      <Outlet />
    </>
  );
};
