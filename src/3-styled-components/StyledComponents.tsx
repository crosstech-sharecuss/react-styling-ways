import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";

function StyledComponents() {
  const StyledDiv = styled.div`
    text-align: center;
    color: ${(props) => props.color};
    background-color: black;
  `;

  return (
    <StyledDiv color="blue">
      <h3>Hello World</h3>
    </StyledDiv>
  );
}

export default StyledComponents;
