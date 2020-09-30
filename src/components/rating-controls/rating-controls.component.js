import React from "react";
import styles from "./rating-controls.module.css";

const RatingControls = ({ activeItem: { name, min, max, step, rating }, navigatorFunctions, rateItem }) => {
  const onRangeInput = (e) => rateItem(e.target.value);
  return (
    <div className={styles["rating-controls"]}>
      <div className={styles["rating-info"]}>
        <h1 className={styles["rated-item-name"]}>{name}</h1>
        <span className={styles["current-rating"]}>{`${rating || "-"}/${max}`}</span>
      </div>
      <div className={styles["rating-range-wrapper"]}>
        <span>
          Értékelési lépték: <span className={styles["rating-range-step"]}>{step}</span>
        </span>
        <input type="range" className={styles["rating-range"]} min={min} max={max} step={step} value={rating || min} onInput={onRangeInput} />
        <div className={styles["rating-range-endpoints"]}>
          <span className={styles["rating-range-endpoint-min"]}>{min}</span>
          <span className={styles["rating-range-endpoint-max"]}>{max}</span>
        </div>
      </div>
      <div className={styles["rating-navigation"]}>
        <button className={styles["prev-rating-btn"]} onClick={navigatorFunctions.prev}>
          <span className="flip-y">➔</span>
        </button>
        <button className={styles["next-rating-btn"]} onClick={navigatorFunctions.next}>
          <span>➔</span>
        </button>
      </div>
    </div>
  );
};

export default RatingControls;
