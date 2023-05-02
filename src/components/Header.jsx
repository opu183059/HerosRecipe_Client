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
      <nav className="w-10/12 mx-auto flex flex-col lg:flex-row justify-between my-3 items-center">
        <div className="logo mb-3 lg:mb-0">
          <Link to="/">
            <div className="pageTitle flex items-end">
              <h3 className="text-2xl font-extrabold text-amber-700">
                SULTANs
              </h3>
              <span className="ms-1 font-bold">recipe</span>
            </div>
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
              {/* <span className="mx-2">{user.email}</span> */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <button className="flex items-center">
                  <img className="w-10 rounded-full mx-2" src={user.photoURL} />
                </button>
              </div>
              <button
                className="px-5 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <span>
              <button className="px-5 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l">
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
