import Main from "./components/Main";
import Sidenav from "./components/Sidenav/index";
import { UsernameStorage } from "./context/UsernameContext";

import styles from "./styles/app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <UsernameStorage>
        <Sidenav />
        <Main />
      </UsernameStorage>
    </div>
  );
}

export default App;
