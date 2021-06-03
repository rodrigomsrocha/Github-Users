import React from "react";
import Loading from "../Loading/index";

import styles from "./styles/RepoInfo.module.scss";

const ReposInfo = ({ repos, error }) => {
  if (error) {
    return null;
  }

  if (!repos) {
    return <Loading />;
  }

  const principalRepos = repos.slice(0, 4);

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
