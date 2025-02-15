import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/Authprovider";

const Navbar = () => {
  const {loginWithGoogle, logout} = useContext(authContext)
  return (
    <div className=" sticky top-0 z-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className="text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-lg">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/studentResources" className="text-lg">
                  Student Resources
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-xl md:text-2xl font-bold">
            Collaborate
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/studentResources" className="text-lg">
                Student Resources
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-lg">
              Login
            </button>
            <button onClick={logout} className="px-4 py-2 bg-primary text-white rounded-lg text-lg">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
