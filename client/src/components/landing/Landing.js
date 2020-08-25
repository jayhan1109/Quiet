import React from "react";
import styles from "./Landing.module.scss";
import Navbar from "./Navbar";
import cn from "classnames";
import Category from "./Category";

const Landing = () => {
  const {
    container,
    jumbotron,
    title,
    form,
    inputBox,
    search,
    secondSearch,
    submit,
  } = styles;

  return (
    <div className={container}>
      <nav>
        <Navbar />
      </nav>
      <section className={jumbotron}>
        <div className={title}>Quiet</div>
        <form className={form}>
          <div className={inputBox}>
            <label>Place</label>
            <input
              type="text"
              className={search}
              placeholder="Quiet places..."
            />
          </div>
          <div className={inputBox}>
            <label>Location</label>
            <input
              type="text"
              className={cn(search, secondSearch)}
              placeholder="Vancouver, Burnaby..."
            />
          </div>
          <input type="submit" value="Search" className={submit} />
        </form>
      </section>
      <Category categoryTitle="Popular This Week" />
      <Category categoryTitle="Popular This Week" />
      <Category categoryTitle="Popular This Week" />
      <Category categoryTitle="Popular This Week" />
    </div>
  );
};

export default Landing;
