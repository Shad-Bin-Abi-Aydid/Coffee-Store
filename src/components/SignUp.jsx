import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.Email.value;
    const password = form.Password.value;
    const name = form.name.value;

    // signup new user using firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const creationTime = result.user.metadata.creationTime;
        const newUser = {
          email,
          name,
          creationTime,
        };

        // store new user information to the database using mongodb
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User Registration Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((error) => {
        console.log("Error is => ", error.message);
      });
  };
  return (
    <>
      <button className="btn btn-ghost underline text-lg text-blue-500">
        <Link to="/">Back</Link>
      </button>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col justify-center items-center gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUP now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="name"
                  name="name"
                />

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
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
