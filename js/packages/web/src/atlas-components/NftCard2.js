import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { ProfileAvatarSvg, NftSvg1 } from '../atlas-assets';
import Label from './Inputs/Label';

const NftCard2 = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <img src={NftSvg1.src} style={{ width: '100%' }} />

        <Box className={classes.colorCode}>
          <Label
            text="02:40:12 left"
            fontWeight={500}
            fontSize="1.6rem"
            lineHeight="2.4rem"
            marginBottom={0}
          />
        </Box>
      </Box>
      <Box padding="0 1.5rem">
        <Label
          text="Abstact Smoke Red Blue"
          fontWeight={500}
          fontSize="2.2rem"
          lineHeight="3.3rem"
          marginBottom="1rem"
        />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex">
            <Label
              text="1.25"
              fontWeight={600}
              fontSize="2.2rem"
              lineHeight="3.3rem"
              marginBottom={0}
              marginRight={5}
            />
            <Label
              text="SOL"
              fontSize="1.6rem"
              lineHeight="3.3rem"
              marginBottom={0}
            />
          </Box>
          <Box>
            <img
              src={ProfileAvatarSvg.src}
              style={{
                height: '2.2rem',
                width: '2.2rem',
                borderRadius: 100,
                marginRight: '-.5rem',
              }}
            />
            <img
              src={ProfileAvatarSvg.src}
              style={{
                height: '2.2rem',
                width: '2.2rem',
                borderRadius: 100,
                marginRight: '-.5rem',
              }}
            />
            <img
              src={ProfileAvatarSvg.src}
              style={{ height: '2.2rem', width: '2.2rem', borderRadius: 100 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NftCard2;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#121522',
    borderRadius: 20,
    width: '35rem',
    height: '40rem',
    padding: '1rem',
    marginRight: '2.5rem',
    cursor: 'pointer',
  },

  header: {
    position: 'relative',
    marginBottom: '3rem',
  },

  colorCode: {
    width: '12rem',
    height: '3.5rem',
    background:
      'radial-gradient(100% 100% at 0% 0%, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0) 100%)',
    boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(12px)',
    /* Note: backdrop-filter has minimal browser support */

    borderRadius: 5,
    position: 'absolute',
    bottom: '-1.5rem',
    left: '35%',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
  },
}));
