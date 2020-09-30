import React, { useState, useRef, useEffect } from "react";
import styles from "./app.module.css";
import * as data from "./mock.json";
import statOptions from "./ratingStatistics.js";

import Header from "./components/header/header.component";
import ItemCardList from "./components/item-card-list/item-card-list.component";
import RatingStatList from "./components/rating-stat-list/rating-stat-list.component";
import RatingControls from "./components/rating-controls/rating-controls.component";

const response = data.response;
const {
  data: { event, user, factors },
} = response;

function App() {
  const [items, setItems] = useState(factors);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(items[activeItemIndex]);
  const itemCardListRef = useRef(null);

  const toPrevItem = () => {
    const newIndex = activeItemIndex === 0 ? items.length - 1 : activeItemIndex - 1;
    setActiveItemIndex(newIndex);
  };
  const toNextItem = () => {
    const newIndex = activeItemIndex === items.length - 1 ? 0 : activeItemIndex + 1;
    setActiveItemIndex(newIndex);
  };
  const rateItem = (rating) => {
    // update single item
    const itemClone = { ...activeItem };
    itemClone.rating = rating;
    setActiveItem(itemClone);

    // update whole array
    const itemsClone = [...items];
    itemsClone[activeItemIndex] = itemClone;
    setItems(itemsClone);
  };

  useEffect(() => {
    itemCardListRef.current.children[activeItemIndex].scrollIntoView({ behavior: "smooth" });
    setActiveItem(items[activeItemIndex]);
  }, [activeItemIndex]);

  return (
    <div>
      <Header user={user} event={event} />
      <div className={styles["main-container"]}>
        <div className={styles["item-card-list-wrapper"]}>
          <ItemCardList items={items} activeItem={activeItem} setActiveItem={setActiveItem} itemCardListRef={itemCardListRef} />
        </div>
        <div className={styles["rating-wrapper"]}>
          <RatingStatList items={items} statOptions={statOptions} />
          <RatingControls activeItem={activeItem} navigatorFunctions={{ prev: toPrevItem, next: toNextItem }} rateItem={rateItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
