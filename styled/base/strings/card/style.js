import { css } from "styled-components";
import {
  cursorStyle,
  boxShadow,
  cardColor,
  cardBackground,
  textCenter,
} from "../../../maps";

export default css`
  color: ${(props) => (props.color ? props.color : cardColor)};
  background: ${(props) => (props.bg ? props.bg : cardBackground)};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.1rem")};
  opacity: ${(props) => (props.opacity ? props.opacity : "none")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : boxShadow)};
  text-align: ${textCenter};

  transition: border 0.5s, color 0.5s, background 0.5s, background 0.5s,
    box-shadow 0.5s;

  &:hover {
    border: ${(props) => (props.hvrBorder ? props.hvrBorder : "none")};
    color: ${(props) => (props.hvrColor ? props.hvrColor : "auto")};
    background: ${(props) => (props.hvrBg ? props.hvrBg : "auto")};
    box-shadow: ${(props) => (props.hvrShadow ? props.hvrShadow : "auto")};
    cursor: ${cursorStyle};
  }
`;
