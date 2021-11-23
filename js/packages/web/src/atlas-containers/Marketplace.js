import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Label from '../atlas-components/Inputs/Label';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';
import NftCard from '../atlas-components/NftCard';
import { ThreeDotsSvg } from '../atlas-assets';
import { BorderGradientButton } from '../atlas-components/Buttons/BorderGradientButton';
import NftCard2 from '../atlas-components/NftCard2';
import NftCard3 from '../atlas-components/NftCard3';

const MarketPlace = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="5rem"
      >
        <Box>
          <Label
            text="Marketplace"
            fontWeight={700}
            fontSize="4rem"
            lineHeight="4rem"
          />
          <Label
            text="Buy or see the auction of unique NFTs to share and sell."
            fontSize="1.8rem"
            lineHeight="2.7rem"
            marginBottom={0}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <GradientButton className={classes.createCollectionBtn}>
            <Label
              text="Create Collection"
              fontWeight={600}
              fontSize="2.2rem"
              lineHeight="3.3rem"
              marginBottom={0}
            />
          </GradientButton>

          <Box className={classes.threeDotsContainer}>
            <img src={ThreeDotsSvg} style={{ height: '4rem' }} />
          </Box>
        </Box>
      </Box>

      <Box marginBottom="10rem">
        <Box display="flex" justifyContent="space-between" marginBottom="5rem">
          <NftCard3 />
          <NftCard3 />
          <NftCard3 />
          <NftCard3 />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <NftCard3 />
          <NftCard3 />
          <NftCard3 />
          <NftCard3 />
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <BorderGradientButton className={classes.loadMoreBtn}>
          <Typography className={classes.gradientText}>Load More</Typography>
        </BorderGradientButton>
      </Box>
    </Box>
  );
};

export default MarketPlace;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
  },

  createCollectionBtn: {
    height: '6rem',
    width: '24rem',
    marginRight: '5rem',
  },

  threeDotsContainer: {
    cursor: 'pointer',
  },

  loadMoreBtn: {
    width: '34rem',
    height: '5rem',
  },

  gradientText: {
    background:
      '-webkit-linear-gradient(291.08deg, #00A69C 3.08%, #AC51FF 117.64%)',

    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
  },
}));
