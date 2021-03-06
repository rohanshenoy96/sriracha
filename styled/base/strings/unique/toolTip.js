import { css } from "styled-components";

export default css`
  & .tooltip {
    visibility: hidden;
    opacity: 0;
    margin: ${(props) => (props.ttM ? props.ttM : "0")};
    padding: ${(props) => (props.ttP ? props.ttP : "0")};
    width: ${(props) => (props.ttW ? props.ttW : "auto")};
    height: ${(props) => (props.ttH ? props.ttH : "auto")};
    /* color: ${(props) =>
      !props.ttColor
        ? props.theme.colors.gray9
        : props.theme.colors[props.ttColor]
        ? props.theme.colors[props.ttColor]
        : props.ttColor};
    background: ${(props) =>
      !props.ttBg
        ? props.theme.colors.gray0
        : props.theme.colors[props.ttBg]
        ? props.theme.colors[props.ttBg]
        : props.ttBg}; */
    top: ${(props) => (props.ttTop ? props.ttTop : "none")};
    right: ${(props) => (props.ttRight ? props.ttRight : "none")};
    bottom: ${(props) => (props.ttBottom ? props.ttBottom : "none")};
    left: ${(props) => (props.ttLeft ? props.ttLeft : "none")};
    border-radius: ${(props) => (props.ttRadius ? props.ttRadius : "auto")};
    z-index: ${(props) => (props.ttZindex ? props.ttZindex : 1)};
    position: absolute;
    transition: ease-in-out, visibility 0.25s ease-in-out;
    transition: ease-in-out, opacity 0.25s ease-in-out;
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  &:focus .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;
