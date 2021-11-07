import React from "react";

// Import Styled Component
import { StyledComponentsStyle } from "./StyledComponents.style";

// Use as a component
export const StyledComponents: React.FC<any> = () => {
  return (
    <StyledComponentsStyle color="white">
      <h3>Hello World</h3>
    </StyledComponentsStyle>
  );
};

export const StyledComponentsReadme = () => {
  return (
    <div>
      <ul>
        <li>CSS-in-JS Concept</li>
        <li>Consistent way for large projects</li>
        <li>
          Use javascript variables and constants for parameterized styling for
          example theme etc.
        </li>
      </ul>
    </div>
  );
};
