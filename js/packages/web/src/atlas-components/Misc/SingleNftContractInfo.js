import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Label from "../Inputs/Label";

const SingleNftContractInfo = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Label
        text="Details"
        fontSize="2.4rem"
        lineHeight="3.6rem"
        fontWeight={700}
        marginBottom="3rem"
      />

      <Box>
        <Box className={classes.header}>
          <Box className={classes.col}>
            <Label
              text="Contract Address"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="Token ID"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="Blockchain"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="Metadata"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
        </Box>
        <Box className={classes.body}>
          <Box className={classes.col}>
            <Label
              text="0x495f...7b5e"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="7388185251258536..."
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="Solana"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="Editable"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleNftContractInfo;

const useStyles = makeStyles((theme) => ({
  container: { marginBottom: "5rem" },

  header: {
    display: "flex",
    marginBottom: "2rem",
  },

  body: {
    display: "flex",
  },

  col: {
    flex: 1,
  },
}));
