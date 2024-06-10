import styles from "./Error.module.css";

function Error({ error }) {
  return <p className={styles.errorMess}>{error}</p>;
}

export default Error;
