import { NavLink } from "react-router-dom";
import Logo from "../assets/images/file.png";

const NavBar = () => {
  function showSidebar() {
    const sideBar = document.getElementById("showBar");
    sideBar.style.display = "flex";
  }

  function hideSideBar() {
    const hideBar = document.getElementById("showBar");
    hideBar.style.display = "none";
  }

  const LinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0"
      : "block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0";

  const LinkClass2 = ({ isActive }) =>
    isActive
      ? "text-orange-700 hover:text-orange-500"
      : "text-white hover:text-orange-500";

  return (
    <div>
      <nav
        className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-600"
        id="sidebar"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-10" alt="LMV Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={showSidebar}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                onClick={showSidebar}
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink to="/" className={LinkClass} aria-current="page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={LinkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={LinkClass}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={LinkClass}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={LinkClass}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className={LinkClass}>
                  Booking
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Another Navigation Section */}

        <div
          id="showBar"
          className="font-bold text-2xl fixed p-3 right-0 top-0 h-full md:w-60 w-full z-50 bg-black/75 shadow[-10_0_10_black] flex-col gap-4 backdrop-blur-md hidden"
        >
          <ul onClick={hideSideBar}>
            <NavLink to="#">
              <svg
                className="mb-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 -960 960 960"
                width="40"
                fill="red"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </NavLink>
          </ul>
          <ul className="w-full">
            <NavLink to="/" onClick={hideSideBar} className={LinkClass2}>
              Home
            </NavLink>
          </ul>
          <ul className="w-full">
            <NavLink to="/about" onClick={hideSideBar} className={LinkClass2}>
              About Us
            </NavLink>
          </ul>
          <ul className="w-full">
            <NavLink
              to="/services"
              onClick={hideSideBar}
              className={LinkClass2}
            >
              Our Services
            </NavLink>
          </ul>
          <ul className="w-full">
            <NavLink to="/gallery" onClick={hideSideBar} className={LinkClass2}>
              View Our Gallery
            </NavLink>
          </ul>
          <ul className="w-full">
            <NavLink to="/contact" onClick={hideSideBar} className={LinkClass2}>
              Contact Us
            </NavLink>
          </ul>
          <ul className="w-full">
            <NavLink to="booking" onClick={hideSideBar} className={LinkClass2}>
              Booking
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
