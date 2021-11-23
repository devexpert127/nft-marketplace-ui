import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
export const GradientButton = withStyles(() => ({
  root: {
    background: "linear-gradient(291.08deg, #00A69C 3.08%, #AC51FF 117.64%)",
    color: "#fafafa",
    borderRadius: (props) => (!props.plane ? "10px" : 0),
    width: (props) => `${props.width / 10}rem`,
    height: (props) => `${props.height / 10}rem`,
    minWidth: (props) => `${props.minWidth / 10}rem`,
  },
  label: {
    textTransform: "capitalize",
  },
}))(Button);
