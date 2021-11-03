import React from "react";

// Import CSS file as styles object
import styles from "./CssModule.module.css";

// Use CSS as styles object
export const CssModuleStyling: React.FC<any> = () => {
  return (
    <div className={styles.example}>
      <h3>Hello World</h3>
    </div>
  );
};

export const CssModuleStylingReadme = () => {
  return (
    <div>
      <ul>
        <li>
          Import CSS file and use as javascript object in React className
          attribute
        </li>
        <li>Filename must use '*.module.css' pattern</li>
        <li>This CSS Classes will scoped only for this component</li>
      </ul>
    </div>
  );
};
