import { FaCloud } from "react-icons/fa";

import styles from "./Clouds.module.css";

function Clouds({ queryLength }) {
  const isEnough = queryLength >= 2;

  return (
    <>
      <FaCloud
        size={128}
        fill="white"
        className={`${styles.cloud_1} ${
          isEnough ? styles.cloud_1_animation : ""
        }`}
      />
      <FaCloud
        size={128}
        fill="white"
        className={`${styles.cloud_2} ${
          isEnough ? styles.cloud_2_animation : ""
        }`}
      />
      <FaCloud
        size={96}
        fill="white"
        className={`${styles.cloud_3} ${
          isEnough ? styles.cloud_3_animation : ""
        }`}
      />
    </>
  );
}

export default Clouds;
