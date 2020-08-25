import React from "react";
import styles from "./Category.module.scss";
import Card from "./Card";

const Category = ({ categoryTitle }) => {
  const { category, title, cardContainer } = styles;
  return (
    <section className={category}>
      <h2 className={title}>{categoryTitle}</h2>
      <div className={cardContainer}>
        <Card
          storeName="La Poret"
          storeAddress="4918 Hardwick, Burnaby"
          quietRate="4.2"
          price="$$"
        />
        <Card
          storeName="La Poret"
          storeAddress="4918 Hardwick, Burnaby"
          quietRate="4.2"
          price="$$"
        />
        <Card
          storeName="La Poret"
          storeAddress="4918 Hardwick, Burnaby"
          quietRate="4.2"
          price="$$"
        />
      </div>
    </section>
  );
};

export default Category;
