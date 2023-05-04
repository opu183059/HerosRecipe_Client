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
      <nav className="px-24 flex flex-col lg:flex-row justify-between py-3 items-center bg-base-100">
        <div className="logo mb-3 lg:mb-0">
          <Link to="/">
            <div className="pageTitle flex items-center font-akaya items-end">
              <h3 className="text-3xl font-extrabold text-amber-700">HEROs</h3>
              <span className="ms-1 font-bold text-lg mt-2">recipe</span>
            </div>
          </Link>
        </div>
        <div className="menu mb-3 lg:mb-0 font-bold flex flex-col md:text-center md:flex-row items-center">
          <Link to="/" className="mx-2 md:justify-center">
            Home
          </Link>
          <Link to="/blog" className="mx-2">
            Blogs
          </Link>
          {user ? (
            <div className="flex flex-col md:text-center md:flex-row items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <button className="flex items-center">
                  {user.photoURL ? (
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                  ) : (
                    <img
                      className="w-10 rounded-full mx-2"
                      src="https://i.ibb.co/JHVvZ07/am-a-19-year-old-multimedia-artist-student-from-manila-21.png"
                    />
                  )}
                </button>
              </div>
              <button
                className=" w-24 ms-2 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <span>
              <button className="w-24 ms-2 py-2 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-r from-amber-600 to-amber-500 hover:bg-gradient-to-l">
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
