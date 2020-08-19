import React from "react";
import styles from "./Landing.module.scss";
import Navbar from "./Navbar";
const Landing = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.jumbotron}>
        <div>Quiet</div>
        <div>form</div>
      </div>
    </div>
  );
};

export default Landing;
