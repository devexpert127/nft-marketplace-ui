import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: ({ marginRight }) => (marginRight ? marginRight : "4rem"),
  },
}));

const GutterVertical = ({ marginRight }) => {
  const classes = useStyles({ marginRight });

  return <Box className={classes.container}></Box>;
};

export default GutterVertical;
