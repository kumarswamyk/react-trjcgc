import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Navigate = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigate;
