import React from "react";

import styles from "./styles/RepoInfo.module.scss";

const ReposInfo = () => {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3333/repos")
      .then((res) => res.json())
      .then((data) => setRepos([...data]));
  }, []);

  console.log(repos);

  return repos.map((repo) => (
    <div key={repo.id} className={styles.container}>
      <a href={repo.html_url}>
        <h3>{repo.name}</h3>
      </a>
      <p>{repo.description}</p>
    </div>
  ));
};

export default ReposInfo;
