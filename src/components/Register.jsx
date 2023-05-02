import React, { useContext, useState } from "react";
import { Authcontect } from "../providers/AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(Authcontect);
  const [error, setError] = useState("");
  // console.log(createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/2YHpXtD/slider-2.jpg')] bg-cover">
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
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered mb-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="errorMessage">
                <p className="text-red-500">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="px-6 py-3 font-medium text-white transition duration-200 rounded-md shadow-md bg-gradient-to-l from-amber-600 to-amber-500 hover:bg-gradient-to-r">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
