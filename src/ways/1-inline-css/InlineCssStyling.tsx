import React from "react";

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
