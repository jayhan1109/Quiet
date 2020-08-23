import React, { Fragment } from "react";
import styles from "./Landing.module.scss";
import Navbar from "./Navbar";
import Category from "../category/Category";
const Landing = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar />
      </nav>
      <section className={styles.jumbotron}>
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
      </section>
      <section className={styles.category}>
        <Fragment>
          <h2 className={styles.title}>Popular This Week</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>//TODO: Add Card Design</div>
          </div>
        </Fragment>
      </section>
    </div>
  );
};

export default Landing;
