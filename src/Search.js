import { useEffect, useRef } from "react";
import styles from "./Search.module.css";

function Search({ query, setQuery, handleGetPosition }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Enter") {
          if (document.activeElement === inputEl.current) return;
          inputEl.current.focus();
          setQuery("");
        }
      }
      window.addEventListener("keydown", callback);

      return () => window.removeEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <>
      <input
        type="text"
        className={styles.search}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />

      <button className={styles.btn} onClick={handleGetPosition}>
        My location
      </button>
    </>
  );
}

export default Search;
