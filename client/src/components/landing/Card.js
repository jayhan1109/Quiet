import React from "react";
import styles from "./Card.module.scss";

const Card = ({ storeName, storeAddress, quietRate, price }) => {
  const {
    card,
    cardImage,
    cardContent,
    cardInfo,
    name,
    address,
    cardRating,
    rateDiv,
    rateName,
    rate,
  } = styles;
  return (
    <div className={card}>
      <div className={cardImage}></div>
      <div className={cardContent}>
        <div className={cardInfo}>
          <p className={name}>{storeName}</p>
          <p className={address}>{storeAddress}</p>
        </div>
        <div className={cardRating}>
          <div className={rateDiv}>
            <p className={rateName}>QUIET</p>
            <div className={rate}>{quietRate}</div>
          </div>
          <div className={rateDiv}>
            <p className={rateName}>PRICE</p>
            <div className={rate}>{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
