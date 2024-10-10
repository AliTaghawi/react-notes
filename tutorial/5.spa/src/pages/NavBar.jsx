import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/about_us' >About Us</Link>
        </li>
        <li>
          <Link to='/products' >Products</Link>
        </li>
        <li>
          <Link to='/developers' >Developers</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;