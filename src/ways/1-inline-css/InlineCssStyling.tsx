import React from "react";
import { CSSProperties } from "styled-components";

// Use inline CSS in Html attribute
export const InlineCssStyling: React.FC<any> = () => {
  return (
    <div
      style={{ textAlign: "center", color: "yellow", backgroundColor: "black" }}
    >
      <h3>Hello World</h3>
    </div>
  );
};

// Use inline CSS in Html attribute
export const InlineCssStyling2: React.FC<any> = () => {
  const styles: CSSProperties = {
    textAlign: "center",
    color: "yellow",
    backgroundColor: "black",
  };

  return (
    <div style={styles}>
      <h3>Hello World</h3>
    </div>
  );
};

export const InlineCssStylingReadme = () => {
  return (
    <div>
      <ul>
        <li>Use CSS rules in Html Attribute</li>
      </ul>
    </div>
  );
};
