import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Checkbox = ({ checked, setChecked }) => {
  const classes = useStyles({ checked });

  return (
    <Box className={classes.container} onClick={setChecked}>
      <Box className={classes.thumb}></Box>
    </Box>
  );
};

export default Checkbox;
const useStyles = makeStyles((theme) => ({
  container: {
    height: "3rem",
    width: "6rem",
    background: ({ checked }) => (!checked ? "#fff" : "#00A69C"),
    borderRadius: 20,
    display: "flex",
    justifyContent: ({ checked }) => (!checked ? "flex-start" : "flex-end"),
    alignItems: "center",
    padding: "5px",
    cursor: "pointer",
  },

  thumb: {
    height: "2rem",
    width: "2rem",

    borderRadius: 100,
    border: ({ checked }) => checked && "2px solid #fff",
    background: ({ checked }) => (checked ? "#fff" : "#00A69C"),
  },
}));
