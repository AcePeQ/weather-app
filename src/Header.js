import styles from "./Header.module.css";

import { MdSunny } from "react-icons/md";
import { FaCloud } from "react-icons/fa";

function Header({ queryLength }) {
  const isEnough = queryLength >= 2;

  return (
    <header className={styles.header}>
      <MdSunny size={128} fill="yellow" className={styles.sun} />
      <FaCloud size={128} fill="white" className={styles.cloud} />
      <h1>WeatherIo</h1>
    </header>
  );
}

export default Header;
