import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { ArrowRightUpSvg, LandingNfts } from '../atlas-assets/index.js';
import { BorderGradientButton } from '../atlas-components/Buttons/BorderGradientButton';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';

const Landing = () => {
  const classes = useStyles();

  console.log({ LandingNfts });

  return (
    <Box className={classes.container}>
      <Box className={classes.containerLeft}>
        <Typography className={classes.heading}>
          Discover, Collect, and Sell{' '}
          <Box className={classes.headingGradient}>Digital Art NFT</Box>{' '}
          Collection
        </Typography>
        <Typography className={classes.desc}>
          A marketplace that has popular artists from the world who are
          presenting their top notch work.
        </Typography>

        <GradientButton className={classes.exploreBtn}>
          <Typography
            className={classes.createBtnText}
            style={{ marginRight: '1rem' }}
          >
            Explore
          </Typography>
          <img src={ArrowRightUpSvg.src} />
        </GradientButton>
        <BorderGradientButton className={classes.createBtn}>
          <Typography className={classes.createBtnText}>Create</Typography>
        </BorderGradientButton>
      </Box>
      <Box className={classes.containerRight}>
        <img
          src={LandingNfts.src}
          style={{ height: '65rem', width: '55rem' }}
        />
      </Box>
    </Box>
  );
};

export default Landing;
const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 10rem',
  },
  containerLeft: {
    maxWidth: '80rem',
  },

  heading: {
    fontWeight: 700,
    fontSize: '7rem',
    lineHeight: '10rem',
    color: '#fff',
    marginBottom: '4rem',
  },
  headingGradient: {
    background:
      '-webkit-linear-gradient(180deg, #00A69C 12.06%, #AC51FF 93.27%)',

    fontWeight: 700,
    fontSize: '7rem',
    lineHeight: '10rem',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline',
  },
  desc: {
    fontWeight: 400,
    fontSize: '2.4rem',
    lineHeight: '3.6rem',
    color: '#fff',
    marginBottom: '6rem',
  },
  createBtn: {
    width: '17rem',
    height: '5rem',
  },
  createBtnText: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
  },
  exploreBtn: {
    width: '17rem',
    height: '5rem',
    marginRight: '3rem',
  },
}));
