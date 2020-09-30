import React from "react";
import styles from "./item-card-list.module.css";

import ItemCard from "../item-card/item-card.component";

const ItemCardList = ({ items, activeItemIndex, setActiveItemIndex, itemCardListRef }) => {
  return (
    <div ref={itemCardListRef} className={styles["item-card-list"]}>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} isActive={index === activeItemIndex} onClick={() => setActiveItemIndex(index)} />
      ))}
    </div>
  );
};

export default ItemCardList;
