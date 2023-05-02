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
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Project_1</a>
        <div>
          <Link className="mx-2 hover:text-white font-semibold" to="/">
            Home
          </Link>
          <Link className="mx-2 hover:text-white font-semibold" to="/login">
            Login
          </Link>
          <Link className="mx-2 hover:text-white font-semibold" to="/register">
            Register
          </Link>
          <Link className="mx-2 hover:text-white font-semibold" to="/order">
            Orders
          </Link>
          {user ? (
            <div>
              <span>{user.email}</span>{" "}
              <button className="btn btn-outline" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <span>
              <Link to="/login">Log out</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
