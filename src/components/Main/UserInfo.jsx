import React from "react";
import { UsernameContext } from "../../context/UsernameContext";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";

import styles from "./styles/UserInfo.module.scss";

const UserInfo = () => {
  const { username } = React.useContext(UsernameContext);
  const { data } = useFetch(`https://api.github.com/users/${username}`);

  return (
    <div className={styles.container}>
      {data ? (
        <>
          <img src={data.avatar_url} alt={data.login} />
          <div className={styles.info}>
            <h2>{data.name}</h2>
            <p>{data.bio}</p>
            <p>
              <strong>Username:</strong> {data.login}
            </p>
            <p>
              <strong>Followers:</strong> {data.followers}
            </p>
            <p>
              <strong>Repos:</strong> {data.public_repos}
            </p>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserInfo;
