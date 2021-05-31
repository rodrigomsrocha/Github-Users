import React from "react";
import Loading from "../Loading/index";

import { UsernameContext } from "../../context/UsernameContext";

import { useFetch } from "../../hooks/useFetch";

import styles from "./styles/RepoInfo.module.scss";

const ReposInfo = () => {
  const { username } = React.useContext(UsernameContext);
  const { data } = useFetch(`${username}/repos`);

  if (!data) {
    return <Loading />;
  }

  const principalRepos = data.slice(0, 4);

  return principalRepos.map((repo) => (
    <div key={repo.id} className={styles.container}>
      <a href={repo.html_url}>
        <h3>{repo.name}</h3>
      </a>
      <p>{repo.description}</p>
    </div>
  ));
};

export default ReposInfo;
