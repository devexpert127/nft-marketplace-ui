import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
export const BorderGradientButton = withStyles(() => ({
  root: {
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "10px",
      border: "2px solid transparent",
      background:
        "linear-gradient(291.08deg, #00A69C 3.08%, #AC51FF 117.64%) border-box",

      WebkitMask:
        "linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0)",

      WebkitMaskComposite: "destination-out",
    },
    borderRadius: (props) => (!props.plane ? "44px" : 0),
    width: (props) => `${props.width / 10}rem`,
    height: (props) => `${props.height / 10}rem`,
    minWidth: (props) => `${props.minWidth / 10}rem`,
  },
  label: {
    textTransform: "capitalize",
  },
}))(Button);
