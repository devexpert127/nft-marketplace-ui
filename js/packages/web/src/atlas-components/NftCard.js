import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { SolanaLogo2Svg, ThreeDotsSvg } from '../atlas-assets';
import Label from './Inputs/Label';

const NftCard = ({ collection, onClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container} onClick={onClick}>
      <Box className={classes.header}>
        <img src={SolanaLogo2Svg.src} style={{ width: '100%' }} />

        <Box className={classes.circleImage}>
          <img src={SolanaLogo2Svg.src} style={{ width: '100%' }} />
        </Box>
        <Box className={classes.itemCount}>
          <Label
            text="20 Items"
            fontWeight={500}
            fontSize="1.8rem"
            lineHeight="2.7rem"
          />
        </Box>

        <Box className={classes.colorCode}>
          <Label
            text="#7abW20"
            fontWeight={500}
            fontSize="1.6rem"
            lineHeight="2.4rem"
            marginBottom={0}
          />
        </Box>
        <Box className={classes.threeDotsContainer}>
          <img src={ThreeDotsSvg.src} />
        </Box>
      </Box>
      <Box padding="0 1.5rem">
        <Label
          text={collection ? collection.name : 'Animated Pattern Art'}
          fontWeight={600}
          fontSize="2.4rem"
          lineHeight="3.6rem"
        />
        <Label
          text={
            collection
              ? collection.description
              : 'Animonkeys is a generative collection of 2500 tokens divided into 5 groups ....'
          }
          fontSize="1.5rem"
          lineHeight="2.2rem"
        />
      </Box>
    </Box>
  );
};

export default NftCard;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#121522',
    borderRadius: 20,
    width: '40rem',
    height: '50rem',
    padding: '1rem',
    marginRight: '4rem',
    marginBottom: '5rem',
    cursor: 'pointer',
  },

  header: {
    position: 'relative',
    marginBottom: '6rem',
  },

  circleImage: {
    position: 'absolute',
    height: '8rem',
    width: '8rem',
    borderRadius: 100,

    bottom: '-4rem',
    left: '2rem',
    overflow: 'hidden',
    border: '1px solid #000',
  },

  itemCount: {
    position: 'absolute',

    right: 0,
    bottom: '-3.7rem',
    background: '#010613',

    height: '4rem',
    width: '15rem',
    display: 'flex',

    justifyContent: 'center',

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: '.8rem 0 .5rem 1rem',
  },

  colorCode: {
    width: '10rem',
    height: '3rem',
    background:
      'radial-gradient(100% 100% at 0% 0%, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0) 100%)',
    boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(12px)',
    /* Note: backdrop-filter has minimal browser support */

    borderRadius: 10,
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
  },

  threeDotsContainer: {
    height: '3.2rem',
    width: '3.2rem',

    background:
      'radial-gradient(100% 100% at 0% 0%, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0) 100%)',
    boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(12px)',
    /* Note: backdrop-filter has minimal browser support */

    borderRadius: 25,
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));
