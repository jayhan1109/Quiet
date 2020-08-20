import React from "react";
import styles from "./Landing.module.scss";
import Navbar from "./Navbar";
const Landing = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.jumbotron}>
        <div className={styles.title}>Quiet</div>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.search}
            placeholder="Quiet places..."
          />
          <input
            type="text"
            className={styles.search}
            placeholder="Location..."
          />
          <input type="submit" value="Search" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};

export default Landing;
