import React from "react";
import styles from "./styles/form.module.scss";

const Form = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <button type="button">Submit</button>
    </form>
  );
};

export default Form;
