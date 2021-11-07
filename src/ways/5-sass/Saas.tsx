import React from "react";

// Import CSS file as styles object
import "./Style.scss";

// Use CSS as styles object
export const SassStyling: React.FC<any> = () => {
  return (
    <div className="example_saas">
      <h3>Hello World</h3>
    </div>
  );
};

export const SassStylingReadme = () => {
  return (
    <div>
      <ul>
        <li>Use all SASS features in seperate '.scss' file.</li>
      </ul>
    </div>
  );
};
