import React from "react";
import styles from "./Landing.module.scss";
import Navbar from "./Navbar";
import cn from "classnames";

const Landing = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar />
      </nav>
      <section className={styles.jumbotron}>
        <div className={styles.title}>Quiet</div>
        <form className={styles.form}>
          <div className={styles.inputBox}>
            <label>Place</label>
            <input
              type="text"
              className={styles.search}
              placeholder="Quiet places..."
            />
          </div>
          <div className={styles.inputBox}>
            <label>Location</label>
            <input
              type="text"
              className={cn(styles.search, styles.secondSearch)}
              placeholder="Vancouver, Burnaby..."
            />
          </div>
          <input type="submit" value="Search" className={styles.submit} />
        </form>
      </section>
      <section className={styles.category}>
        <h2 className={styles.categoryTitle}>Popular This Week</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>Hello</div>
          <div>World</div>
          <div>Good</div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
