import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Label from "../Inputs/Label";
import NftCard3 from "../NftCard3";
import { BorderGradientButton } from "../Buttons/BorderGradientButton";

const MoreFromThisCollection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Label
        text="More from this collection"
        fontSize="2.4rem"
        lineHeight="3.6rem"
        fontWeight={700}
        marginBottom="3rem"
      />
      <Box className={classes.cardsContainer}>
        <NftCard3 />
        <NftCard3 />
        <NftCard3 />
        <NftCard3 />
      </Box>

      <Box display="flex" justifyContent="center">
        <BorderGradientButton className={classes.btn}>
          <Typography className={classes.btnText}>View All</Typography>
        </BorderGradientButton>
      </Box>
    </Box>
  );
};

export default MoreFromThisCollection;

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#000",
  },

  cardsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8rem",
  },
  btn: {
    width: "20rem",
    height: "6rem",
  },
  btnText: {
    background:
      "-webkit-linear-gradient(291.08deg, #AC51FF 3.08%, #00A69C 117.64%)",

    fontWeight: 600,
    fontSize: "1.8rem",
    lineHeight: "2.7rem",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline",
  },
}));
