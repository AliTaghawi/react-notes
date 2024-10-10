import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Developers = () => {
  return (
    <div>
      <h1>Developers</h1>
      <ul>
        <li>
          <Link to='/developers/front_end'>FrontEnd</Link>
        </li>
        <li>
          <Link to='/developers/back_end'>BackEnd</Link>
        </li>
      </ul>
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default Developers;