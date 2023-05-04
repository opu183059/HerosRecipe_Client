import React, { useContext, useState } from "react";
import { Authcontect } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, logOut } = useContext(Authcontect);
  const [errormgs, setErrormgs] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // console.log(createUser);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    setErrormgs("");
    setSuccessMessage("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);
    if (password.length < 6) {
      setErrormgs("Password must be at least 6 characters");
      return;
    }
    if ((email, password)) {
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          setSuccessMessage("Account created successfully goto Login");
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
          console.log(loggedUser);
          form.reset();
          logOut()
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          let errrormessage = error.code.split("auth/")[1];
          setErrormgs(errrormessage);
          console.log(error);
        });
    } else {
      setErrormgs("Email or Passwords cannot be empty");
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/2YHpXtD/slider-2.jpg')] bg-cover bg-fixed">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="text-stone-300">Welcome to our page</p>
            <h1 className="text-2xl font-bold text-amber-500">
              Please <span className="font-akaya text-5xl">Register</span>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered mb-2"
                  required
                />
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
                  className="input input-bordered mb-2"
                />
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="errorMessage">
                <p className="text-red-500">{errormgs}</p>
                <p className="text-green-700">{successMessage}</p>
              </div>

              <div className="form-control mt-4">
                <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-l from-amber-600 to-amber-500 hover:bg-gradient-to-r">
                  Register
                </button>
              </div>
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className=" text-lg font-semibold text-blue-700"
                >
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
