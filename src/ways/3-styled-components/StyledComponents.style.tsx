import styled from "styled-components";
import Constants from "../../constants/Colors";

export const StyledComponentsStyle = styled.div`
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${Constants.SecondaryColor};
`;
