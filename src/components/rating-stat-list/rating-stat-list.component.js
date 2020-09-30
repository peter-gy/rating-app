import React from "react";
import styles from "./rating-stat-list.module.css";

import RatingStat from "../rating-stat/rating-stat.component";

const RatingStatList = ({ items, statOptions }) => {
  return (
    <div className={styles["rating-stat-list"]}>
      {statOptions.map(({ type, evaluatorFn }, index) => (
        <RatingStat key={index} type={type} value={evaluatorFn(items)} />
      ))}
    </div>
  );
};

export default RatingStatList;
