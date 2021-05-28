import React from "react";

import styles from "./styles/UserInfo.module.scss";

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <img src="https://avatars.githubusercontent.com/u/62557968?v=4" alt="" />
      <div className={styles.info}>
        <h2>Rodrigo Marques</h2>
        <p>Meu nome é Rodrigo, Aluno da Origamid, cod3r, Keyde</p>
        <p>
          <strong>Username:</strong> rodrigomsrocha
        </p>
        <p>
          <strong>Followers:</strong> 11
        </p>
        <p>
          <strong>Repos:</strong> 11
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
