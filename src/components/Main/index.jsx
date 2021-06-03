import React from "react";

import UserInfo from "./UserInfo";
import ReposInfo from "./ReposInfo";

import { UsernameContext } from "../../context/UsernameContext";

import styles from "./styles/index.module.scss";
import UserNotFound from "../UserNotFound";
import { useFetch } from "../../hooks/useFetch";

const Main = () => {
  const { username } = React.useContext(UsernameContext);
  const { data: user, error } = useFetch(`${username}`);
  const { data: repos } = useFetch(`${username}/repos`);

  if (!username) {
    return <div className={styles.container}></div>;
  }

  return (
    <div className={styles.container}>
      {error === undefined ? (
        <>
          <UserInfo user={user} error={error} />
          <ReposInfo repos={repos} error={error} />
        </>
      ) : (
        <UserNotFound />
      )}
    </div>
  );
};

export default Main;
