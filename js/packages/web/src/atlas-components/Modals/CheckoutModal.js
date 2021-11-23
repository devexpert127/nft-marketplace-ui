import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
// import { useDispatch } from 'react-redux';

import CustomModal from './CustomModal';
import Label from '../Inputs/Label';
import { NftSvg1 } from '../../atlas-assets';
import { GradientButton } from '../Buttons/GradientButton';

const CheckoutModal = ({ showModal, setShowModal }) => {
  const classes = useStyles();

  // const dispatch = useDispatch();

  return (
    <CustomModal showModal={showModal} setShowModal={setShowModal}>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Box></Box>
          <Label
            text="Complete checkout"
            fontSize="2.8rem"
            lineHeight="4.2rem"
            marginBottom={0}
            fontWeight={600}
          />

          <Button
            onClick={() => setShowModal(false)}
            style={{ minWidth: 'auto' }}
          >
            <Close
              style={{ height: '2.5rem', width: '2.5rem', color: '#626262' }}
            />
          </Button>
        </Box>

        <Box class={classes.contentContainer}>
          <Box className={classes.divider}></Box>

          <Box className={classes.body}>
            <Label
              text="Summary"
              fontSize="2.4rem"
              lineHeight="3.6rem"
              fontWeight={500}
            />

            <Box display="flex" alignItems="center">
              <img
                src={NftSvg1.src}
                style={{ width: '12rem', marginRight: '1.5rem' }}
              />
              <Box>
                <Label
                  text="#4326"
                  fontSize="1.4rem"
                  lineHeight="2.1rem"
                  color="rgba(255,255,255,.5)"
                  fontWeight={500}
                  marginBottom="4px"
                />
                <Label
                  text="Abstract Painting Art"
                  fontSize="2.4rem"
                  lineHeight="3.6rem"
                  fontWeight={700}
                  marginBottom="7px"
                />
                <Label
                  text="Owned by: CryptoZee"
                  fontSize="1.6rem"
                  lineHeight="2.4rem"
                  fontWeight={500}
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.divider}></Box>

          <Box className={classes.totalSection}>
            <Box className={classes.totalSectionRow}>
              <Label text="Sub-Total" fontSize="2rem" lineHeight="2.6rem" />
              <Label
                text="20.01 SOL"
                fontSize="2.4rem"
                lineHeight="3.6rem"
                fontWeight={500}
              />
            </Box>
            <Box className={classes.totalSectionRow}>
              <Label
                text="Royalities"
                fontSize="2rem"
                lineHeight="2.6rem"
                marginBottom="3rem"
              />
              <Label text="3.2 %" fontSize="2rem" lineHeight="3rem" />
            </Box>

            <Box className={classes.totalSectionRow}>
              <Label text="Total" fontSize="2rem" lineHeight="2.6rem" />
              <Box display="flex" alignItems="center">
                <Label
                  text="20.01 SOL"
                  fontSize="3.4rem"
                  lineHeight="5.1rem"
                  fontWeight={600}
                  marginRight="5px"
                />
                <Label
                  text="($2356.07)"
                  fontSize="2rem"
                  lineHeight="3rem"
                  color="#9B9B9B"
                />
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" marginBottom="5rem">
            <Label
              text="Check this box to agree the Atlas Finance’s "
              fontSize="1.6rem"
              lineHeight="2.4rem"
              marginRight="5px"
            />
            <Label
              text="Terms of Services"
              fontSize="1.6rem"
              lineHeight="2.4rem"
              color="#AC51FF"
            />
          </Box>

          <Box display="flex" justifyContent="center">
            <GradientButton className={classes.btn}>
              <Label
                text="Checkout"
                fontSize="1.6rem"
                lineHeight="2.1rem"
                fontWeight={600}
                marginBottom={0}
              />
            </GradientButton>
          </Box>
        </Box>
      </Box>
    </CustomModal>
  );
};

export default CheckoutModal;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#121522',

    width: '85rem',

    padding: '3rem',
    borderRadius: 10,
  },

  contentContainer: {
    padding: '0rem 8rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },

  divider: {
    width: '55rem',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, .1)',
    margin: '0 auto',
  },

  body: {
    padding: '5rem 0',
  },

  totalSection: {
    padding: '3rem 0',
  },

  totalSectionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },

  btn: {
    width: '20rem',
    height: '5rem',
  },
}));
