import React from "react";
import Navbar from "../landing/Navbar";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    auth,
    formContainer,
    container,
    inputs,
    bottom,
    input,
    submit,
  } = styles;
  return (
    <div className={auth}>
      <Navbar />
      <div className={container}>
        <div className={formContainer}>
          <div className={inputs}>
            <input type="text" placeholder="Username" className={input} />
            <input type="email" placeholder="Email" className={input} />
            <input type="password" placeholder="Password" className={input} />
            <input
              type="password"
              placeholder="Confirm Password"
              className={input}
            />
            <input type="submit" className={submit} />
          </div>
          <p className={bottom}>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
