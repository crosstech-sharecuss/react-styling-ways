import React from "react";

// Import CSS file as styles object
import styles from "./CssStyleImporting.module.css";

// Use CSS as styles object
export const CssStyleImporting: React.FC<any> = () => {
  return (
    <div className={styles.example}>
      <h3>Hello World</h3>
    </div>
  );
};
