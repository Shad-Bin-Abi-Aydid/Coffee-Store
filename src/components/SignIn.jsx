import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {

    const {signInUser} =useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.Email.value;
    const password = form.Password.value;

    const logInDetails = {
        email,
        password
    }
    console.log(logInDetails)

    signInUser(email, password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.log('Error => ', error.message);
    })


  };
  return (
    <div>
      <button className="btn btn-ghost underline text-lg text-blue-500">
        <Link to="/">Back</Link>
      </button>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col justify-center items-center gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  SignIn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
