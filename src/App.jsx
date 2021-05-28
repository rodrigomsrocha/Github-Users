import Main from "./components/Main";
import Sidenav from "./components/Sidenav/index";

import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
