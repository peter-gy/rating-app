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
  const itemCardListRef = useRef(null);

  const toPrevItem = () => setActiveItemIndex(activeItemIndex === 0 ? items.length - 1 : activeItemIndex - 1);
  const toNextItem = () => setActiveItemIndex(activeItemIndex === items.length - 1 ? 0 : activeItemIndex + 1);
  const rateItem = (rating) => {
    const itemsClone = [...items];
    itemsClone[activeItemIndex].rating = rating;
    setItems(itemsClone);
  };

  useEffect(() => {
    itemCardListRef.current.children[activeItemIndex].scrollIntoView({ behavior: "smooth" });
  }, [activeItemIndex]);

  return (
    <div>
      <Header user={user} event={event} />
      <div className={styles["main-container"]}>
        <div className={styles["item-card-list-wrapper"]}>
          <ItemCardList items={items} activeItemIndex={activeItemIndex} setActiveItemIndex={setActiveItemIndex} itemCardListRef={itemCardListRef} />
        </div>
        <div className={styles["rating-wrapper"]}>
          <RatingStatList items={items} statOptions={statOptions} />
          <RatingControls activeItem={items[activeItemIndex]} navigatorFunctions={{ prev: toPrevItem, next: toNextItem }} rateItem={rateItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
