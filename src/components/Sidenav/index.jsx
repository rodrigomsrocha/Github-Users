import React from "react";
import Form from "./Form";

import githubLogo from "../../assets/github-logo.png";

import styles from "./styles/index.module.scss";

const Sidenav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={githubLogo} alt="github logo" />
      </div>
      <Form />
    </div>
  );
};

export default Sidenav;
