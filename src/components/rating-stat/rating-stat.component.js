import React from "react";
import styles from "./rating-stat.module.css";

const RatingStat = ({ type, value }) => {
  return (
    <div className={styles["rating-stat"]}>
      <h4 className={styles["stat-type"]}>{type}</h4>
      <p className={styles["stat-value"]}>{value}</p>
    </div>
  );
};

export default RatingStat;
