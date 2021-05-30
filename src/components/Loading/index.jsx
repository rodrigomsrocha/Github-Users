import React from "react";

import styles from "./styles/index.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingContainer}></div>;
    </div>
  );
};

export default Loading;
