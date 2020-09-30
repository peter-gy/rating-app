import React from "react";
import styles from "./item-card-list.module.css";

import ItemCard from "../item-card/item-card.component";

const ItemCardList = ({ items, activeItem, setActiveItem, itemCardListRef }) => {
  return (
    <div ref={itemCardListRef} className={styles["item-card-list"]}>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} isActive={item === activeItem} onClick={() => setActiveItem(item)} />
      ))}
    </div>
  );
};

export default ItemCardList;
