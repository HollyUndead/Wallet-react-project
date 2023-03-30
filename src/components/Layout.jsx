import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <h2>Header</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/diagram">Statistics</NavLink>
        <NavLink to="/currency">Currency</NavLink>
      </div>
      <div>
        <p>Your Balance</p>
      </div>
      <p>Currency</p>
      <Outlet />
    </>
  );
};
