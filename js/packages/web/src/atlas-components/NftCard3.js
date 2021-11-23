import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {
  ProfileAvatarSvg,
  NftSvg1,
  FavoriteSvg,
  VerifiedSvg,
} from '../atlas-assets';
import Label from './Inputs/Label';
import { useHistory } from 'react-router';

const NftCard3 = ({ nft }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Box
      className={classes.container}
      onClick={() => history.push('/single-nft')}
    >
      <Box className={classes.header}>
        <img src={nft ? nft.image : NftSvg1.src} style={{ width: '100%' }} />

        <Box className={classes.colorCode}>
          <Label
            text="5"
            fontWeight={500}
            fontSize="1.6rem"
            lineHeight="2.4rem"
            marginBottom={0}
          />
          <img
            src={FavoriteSvg.src}
            style={{
              height: '2rem',
              width: '2rem',
              marginLeft: '3px',
            }}
          />
        </Box>
        <Box className={classes.itemCount}>
          <Label
            text="Sushiverse"
            fontWeight={500}
            fontSize="1.8rem"
            lineHeight="2.7rem"
            marginBottom={0}
            marginRight="1rem"
          />
          <img src={VerifiedSvg.src} />
        </Box>
      </Box>
      <Box padding="0 1.5rem">
        <Label
          text={nft ? nft.name : 'Abstract Smoke Red Blue'}
          fontWeight={500}
          fontSize="2.2rem"
          lineHeight="3.3rem"
          marginBottom="1rem"
        />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box className={classes.extraInfoContainer}>
            <Label
              text="Last 0.1 SOL"
              fontWeight={500}
              fontSize="1.4rem"
              lineHeight="2.1rem"
              marginBottom={0}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Label
              text="$135.4"
              fontWeight={400}
              fontSize="1.5rem"
              marginBottom={0}
              marginRight="1rem"
              color="#00A69C"
            />
            <Label
              fontWeight={600}
              text="0.37 SOL"
              fontSize="2.4rem"
              marginBottom={0}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NftCard3;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#121522',
    borderRadius: 20,
    width: '40rem',
    height: '48rem',
    padding: '1rem',
    marginRight: '2.5rem',
    cursor: 'pointer',
  },

  header: {
    position: 'relative',
    marginBottom: '6rem',
  },

  colorCode: {
    width: '5rem',
    height: '3.2rem',
    background:
      'radial-gradient(100% 100% at 0% 0%, rgba(0, 0, 0, 0.32) 0%, rgba(219, 219, 219, 0.72) 100%);',
    boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(12px)',
    /* Note: backdrop-filter has minimal browser support */

    borderRadius: 10,
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCount: {
    position: 'absolute',

    left: 0,
    bottom: '-3.7rem',
    background: '#010613',

    height: '4rem',
    width: '17rem',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: '.8rem 0 .5rem 1rem',
  },

  extraInfoContainer: {
    width: '10rem',
    height: '3.5rem',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',

    background:
      'radial-gradient(100% 100% at 0% 0%, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0) 100%)',
    boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(12px)',
    /* Note: backdrop-filter has minimal browser support */

    borderRadius: 10,

    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
}));
