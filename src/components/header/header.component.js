import React from "react";
import styles from "./header.module.css";

const Header = ({ event, user }) => {
  return (
    <div className={styles["app-header"]}>
      <div className={styles["event-data-wrapper"]}>
        <h1 className={styles["event-name"]}>{event.name}</h1>
      </div>
      <div className={styles["user-data-wrapper"]}>
        <img
          className={styles["user-profile-img"]}
          src={`https://api.adorable.io/avatars/32/${user.lastName + user.firstName}.png`}
          alt={`Profile of ${user.lastName + " " + user.firstName}`}
        />
        <div>
          <h3 className={styles["user-name"]}>{user.lastName + " " + user.firstName}</h3>
          <p className={styles["user-email"]}>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
