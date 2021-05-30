import React from "react";

import UserInfo from "./UserInfo";
import ReposInfo from "./ReposInfo";

import styles from "./styles/index.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <UserInfo />
      <ReposInfo />
    </div>
  );
};

export default Main;
