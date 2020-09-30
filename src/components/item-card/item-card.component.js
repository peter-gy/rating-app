import React from "react";
import styles from "./item-card.module.css";

const ItemCard = ({ item, isActive, onClick }) => {
  return (
    <div onClick={onClick} className={`${styles["item-card"]} ${isActive ? styles["active"] : ""}`}>
      <h4 className={styles["item-name"]}>{item.name}</h4>
      <p className={styles["item-rating"]}>{item.rating ? `${item.rating}/${item.max}` : "Nincs értékelés"}</p>
    </div>
  );
};

export default ItemCard;
