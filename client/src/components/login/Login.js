import React from "react";
import Navbar from "../landing/Navbar";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    auth,
    formContainer,
    container,
    inputs,
    bottom,
    input,
    submit,
    title,
  } = styles;
  return (
    <div className={auth}>
      <Navbar />
      <div className={container}>
        <div className={formContainer}>
          <h2 className={title}>Login</h2>
          <div className={inputs}>
            <input type="email" placeholder="Email" className={input} />
            <input type="password" placeholder="Password" className={input} />

            <input type="submit" className={submit} />
          </div>
          <p className={bottom}>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
