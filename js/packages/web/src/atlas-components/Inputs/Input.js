import { Box, InputBase, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Input = ({
  placeholder,
  multiline,
  height,
  showTick,
  rightText,
  value,
  setValue,
  InputAction,
  background,
  border = true,
}) => {
  const classes = useStyles({ height, background, border });

  return (
    <Box className={classes.inputContainer}>
      <InputBase
        className={[classes.input, height && classes.textArea]}
        placeholder={placeholder}
        multiline={multiline}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {rightText && (
        <Box className={classes.rightTextContainer}>
          <Typography className={classes.rightText}>{rightText}</Typography>
        </Box>
      )}
      {InputAction && <InputAction />}
    </Box>
  );
};

export default Input;

const useStyles = makeStyles((theme) => ({
  input: {
    // background: "rgba(15, 8, 36, 0.55)",
    // border: "1px solid rgba(230, 231, 233, 0.2)",
    // borderRadius: "10px",
    height: ({ height }) => (height ? height : "5rem"),
    width: "100%",
    color: "#fff",
    padding: "0 2rem",
    fontSize: "1.6rem",
    lineHeight: "2.6rem",
    fontWeight: 400,
  },

  textArea: {
    display: "flex",
    alignItems: "flex-start",
    padding: "1.6rem",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    background: ({ background }) => (background ? background : "transparent"),
    border: ({ border }) => border && "1px solid rgba(255, 255, 255, 0.5)",

    borderRadius: "10px",
    padding: "0 1.8rem 0 0",
  },
  rightText: {
    color: "#fff",

    fontSize: "1.6rem",
    lineHeight: "2.4rem",
  },

  rightTextContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
