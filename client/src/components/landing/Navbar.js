import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>QUIET</div>
      <div className={styles.side}>
        <form>
          <input
            type="text"
            className={styles.search}
            placeholder="Quiet places..."
          />
        </form>
        <Link to="/login" className={styles.signin}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
