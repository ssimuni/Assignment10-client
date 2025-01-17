import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loadingUser, setLoadingUser] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme), [theme]
  });

  useEffect(() => {
    setLoadingUser(true);
    const timeout = setTimeout(() => {
      setLoadingUser(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

  const renderLoggedInNavbar = () => {
    return (
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="group cursor-pointer">
            <Link className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
              {loadingUser ? (
                <div><span className="loading loading-spinner text-info"></span></div>
              ) : (
                <div className="dropdown dropdown-end block">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src={user.photoURL || 'https://via.placeholder.com/150'}
                        onMouseEnter={() => setIsHovered(true)}
                      />
                    </div>
                  </div>
                </div>
              )}
              {isHovered && (
                <div
                  className="absolute top-10 right-0 bg-white border-2 shadow-lg rounded-lg text-black px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity "
                >
                  {loadingUser ? 'Loading...' : user.displayName}
                  <button
                    onClick={handleLogOut}
                    className="block mt-2 px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Log out
                  </button>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const renderLoggedOutNavbar = () => {
    return (
      <div>
        <Link to="/login">
          <button className="btn bg-gradient-to-r from-blue-400 to-blue-900 text-gray-100">Log In</button>
        </Link>
        <Link to="/register">
          <button className="btn ml-5 bg-gradient-to-l from-blue-400 to-blue-900 text-gray-100">Register</button>
        </Link>
      </div>

    );
  };

  const navlinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/artlist">My Items</NavLink></li>
    <li><NavLink to="/addArt">Add New Item</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/feedback">Give Feedback</NavLink></li>
    <li><NavLink to="/allartcraft">See All Items</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>

        <a id="not-clickable"><img className="h-10 hidden lg:block" src="/logo.png" alt="" /></a>
        <Tooltip anchorSelect="#not-clickable">
          <button>Welcome to ArtFlicks</button>
        </Tooltip>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>

      <div className="navbar-end">

        <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={handleToggle} />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

        {user ? renderLoggedInNavbar() : renderLoggedOutNavbar()}
      </div>
    </div >
  )
}

export default Navbar