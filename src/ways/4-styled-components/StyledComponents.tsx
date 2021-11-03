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
