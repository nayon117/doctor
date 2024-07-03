import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-medium text-base">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium text-base">
        <Link to="/services">Services</Link>
      </li>
      <li className="font-medium text-base">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="font-medium text-base">
        <Link to="/about">About Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <IoMenuOutline className="text-3xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="font-bold normal-case text-2xl">
          <img src="/images/logo dark.png" alt="doctor logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-white text-black hover:bg-black hover:text-white">
          Booking
        </a>
      </div>
    </div>
  );
};

export default Navbar;
