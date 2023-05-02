import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontect } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(Authcontect);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between my-4 items-center">
        <div className="logo mb-3 lg:mb-0">
          <Link to="/">
            <h3 className="text-2xl font-extrabold text-violet-800">
              TECH Job
            </h3>
          </Link>
        </div>
        <div className="menu mb-3 lg:mb-0 font-bold flex flex-col md:text-center md:flex-row items-center">
          <Link to="/" className="mx-2 md:justify-center">
            Home
          </Link>
          <Link to="blogs" className="mx-2">
            Blogs
          </Link>
          {user ? (
            <div className="flex flex-col md:text-center md:flex-row items-center">
              <span className="mx-2">{user.email}</span>
              <div className="tooltip tooltip-bottom" data-tip="user name">
                <button className="">
                  <img
                    className="w-10 rounded-full mx-2"
                    src="https://i.ibb.co/JHVvZ07/am-a-19-year-old-multimedia-artist-student-from-manila-21.png"
                    alt="person pic"
                  />
                </button>
              </div>
              <button
                className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-700 to-amber-500 hover:bg-gradient-to-l"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <span>
              <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l">
                <Link to="/login">Log in</Link>
              </button>
            </span>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
