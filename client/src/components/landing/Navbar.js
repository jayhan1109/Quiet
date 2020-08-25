import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { container, title, side, search, signin } = styles;
  return (
    <div className={container}>
      <div className={title}>QUIET</div>
      <div className={side}>
        <form>
          <input type="text" className={search} placeholder="Quiet places..." />
        </form>
        <Link to="/login" className={signin}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
