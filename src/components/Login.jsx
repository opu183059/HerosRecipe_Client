import React, { useContext } from "react";
import { Authcontect } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn, signGoogle, signGithub } = useContext(Authcontect);
  // console.log(user);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    signGoogle()
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitLogin = () => {
    signGithub()
      .then((result) => {
        const loggeduser = result.user;
        // console.log(loggeduser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/2YHpXtD/slider-2.jpg')] bg-cover bg-fixed">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-amber-500">
              Please <span className="font-akaya text-5xl">Login</span>
            </h1>
            <p className="text-stone-300">
              to get access our special features.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>
                    Dont have account?{" "}
                    <Link
                      to="/register"
                      className=" text-lg font-semibold text-blue-700"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-3">
                <div className="socialLogin mb-2 flex justify-between">
                  <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black hover:text-white hover:bg-sky-600 rounded-md shadow-md w-auto border-sky-600 hover:border-sky-600"
                  >
                    Google Login
                  </button>
                  <button
                    onClick={handleGitLogin}
                    className="btn bg-white text-black hover:text-white hover:bg-lime-950 rounded-md shadow-md w-auto border-green-600 hover:border-green-600"
                  >
                    GitHub Login
                  </button>
                </div>
                <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-l from-amber-600 to-amber-500 hover:bg-gradient-to-r">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
