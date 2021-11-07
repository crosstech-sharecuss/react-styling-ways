import React from "react";

// Use Tailwind as CSS Classes  object
export const TailwindCssStyling: React.FC<any> = () => {
  return (
    <div className="text-center bg-black text-blue-400">
      <h3>Hello World</h3>
    </div>
  );
};

export const TailwindCssStylingReadme = () => {
  return (
    <div>
      <ul>
        <li>CSS-in-HTML Concept</li>
        <li>Every combination prepared as css classes</li>
      </ul>
    </div>
  );
};
