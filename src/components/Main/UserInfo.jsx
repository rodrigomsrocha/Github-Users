import React from "react";
import Loading from "../Loading";

import styles from "./styles/UserInfo.module.scss";

const UserInfo = ({ user, error }) => {
  if (error) {
    return null;
  }

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <img src={user.avatar_url} alt={user.login} />
          <div className={styles.info}>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <p>
              <strong>Username:</strong> {user.login}
            </p>
            <p>
              <strong>Followers:</strong> {user.followers}
            </p>
            <p>
              <strong>Repos:</strong> {user.public_repos}
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
