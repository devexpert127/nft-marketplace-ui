import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';
import Header from '../atlas-components/Header';
import SelectWalletModal from '../atlas-components/Modals/SelectWalletModal';

const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    // padding: "0 10rem",
  },

  heading: {
    fontWeight: 700,
    fontSize: '4rem',
    lineHeight: '6rem',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '5rem',
  },

  containerCenter: {
    maxWidth: '55rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  btnText: {
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    color: '#fff',
  },

  btn: {
    // height: "5rem",
    // width: "20rem",
  },
}));

const SelectWallet = () => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);

  return (
    <Box className={classes.container}>
      <Box className={classes.containerCenter}>
        <Typography className={classes.heading}>
          Welcome! Let’s begin by selecting your wallet.
        </Typography>

        <GradientButton
          width={200}
          height={50}
          onClick={() => setShowModal(true)}
        >
          <Typography className={classes.btnText}>Select A Wallet</Typography>
        </GradientButton>
      </Box>

      <SelectWalletModal showModal={showModal} setShowModal={setShowModal} />
    </Box>
  );
};

export default SelectWallet;
