import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ArrowRightUpSvg,
  LedgerSvg,
  MathWalletSvg,
  PhantomSvg,
  SolletSvg,
} from '../../atlas-assets';
import { setSolanaInstance } from '../../redux';
import CustomModal from './CustomModal';

const useStyles = makeStyles(theme => ({
  container: {
    background: '#121522',

    width: '50rem',
    padding: '3rem',
    borderRadius: 10,
  },

  heading: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '2.4rem',
    lineHeight: '4rem',
    maxWidth: '34rem',
    marginBottom: '4rem',
  },

  selectWalletOption: {
    display: 'flex',
    marginBottom: '2.4rem',
  },

  selectWalletOptionText: {
    color: '#fff',
    fontWeight: 400,
    fontSize: '2.2rem',
    lineHeight: '3.8rem',
  },
}));

const SelectWalletModal = ({ showModal, setShowModal }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const SelectWalletOption = ({ icon, text }) => {
    return (
      <Button
        className={classes.selectWalletOption}
        onClick={() => dispatch(setSolanaInstance(window['solana']))}
      >
        <img src={icon} style={{ marginRight: '3rem' }} />
        <Typography className={classes.selectWalletOptionText}>
          {text}
        </Typography>
      </Button>
    );
  };

  return (
    <CustomModal showModal={showModal} setShowModal={setShowModal}>
      <Box className={classes.container}>
        <Box display="flex" justifyContent="flex-end" marginBottom="1rem">
          <Button
            onClick={() => setShowModal(false)}
            style={{ minWidth: 'auto' }}
          >
            <Close style={{ height: '2rem', width: '2rem', color: '#fff' }} />
          </Button>
        </Box>
        <Typography className={classes.heading}>
          Pick a wallet to connect to ATLAS Finance
        </Typography>
        <Box>
          <SelectWalletOption icon={SolletSvg} text="Sollet.io" />
          <SelectWalletOption icon={SolletSvg} text="Sollet Extension" />
          <SelectWalletOption icon={LedgerSvg} text="Ledger" />
          <SelectWalletOption icon={PhantomSvg} text="Phantom" />
          <SelectWalletOption icon={MathWalletSvg} text="MathWallet" />
        </Box>
      </Box>
    </CustomModal>
  );
};

export default SelectWalletModal;
