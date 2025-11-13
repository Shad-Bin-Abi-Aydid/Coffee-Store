import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <button className="btn btn-ghost underline text-lg text-blue-500">
        <Link to="/">Back</Link>
      </button>
      <h2>LogIn</h2>
    </div>
  );
};

export default SignIn;
