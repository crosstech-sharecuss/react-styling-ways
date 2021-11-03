import React from "react";

// Import CSS file
import "./CssImportStyling.css";

// Use CSS as class name
export const CssImportStyling: React.FC<any> = () => {
  return (
    <div className="example">
      <h3>Hello World</h3>
    </div>
  );
};

export const CssImportStylingReadme = () => {
  return (
    <div>
      <ul>
        <li>
          Import a css file and use CSS Classes as React className attribute
        </li>
      </ul>
    </div>
  );
};
