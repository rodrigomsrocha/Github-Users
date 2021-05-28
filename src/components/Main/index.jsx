import React from "react";
import UserInfo from "./UserInfo";

import styles from "./styles/index.module.scss";
import ReposInfo from "./ReposInfo";

const Main = () => {
  return (
    <div className={styles.container}>
      <UserInfo />
      <ReposInfo />
    </div>
  );
};

export default Main;
