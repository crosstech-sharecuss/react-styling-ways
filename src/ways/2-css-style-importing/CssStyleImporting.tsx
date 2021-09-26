import React from "react";
import logo from "./logo.svg";
import styles from "./CssStyleImporting.module.css";

function CssStyleImporting() {
  return (
    <div className={styles.example}>
      <h3>Hello World</h3>
    </div>
  );
}

export default CssStyleImporting;
