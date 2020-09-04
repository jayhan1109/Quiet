import React from "react";
import Navbar from "../landing/Navbar";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const { auth } = styles;
  return (
    <div className={auth}>
      <Navbar />
      <div className="formContainer">
        <div className="inputs">
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <input type="submit" />
        </div>
        <p>
          Already have an account? Sign In <Link to="/login">here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
