import React from "react";
import { UsernameContext } from "../../context/UsernameContext";
import styles from "./styles/form.module.scss";

const Form = () => {
  const { value, setValue, updateSearch, updateUsername } =
    React.useContext(UsernameContext);

  function handleChange(e) {
    setValue(e.target.value);
    updateSearch(e.target.value);
  }

  function handleSubmit(e) {
    updateUsername(value);
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
