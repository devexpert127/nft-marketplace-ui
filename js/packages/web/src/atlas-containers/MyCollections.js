import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Label from '../atlas-components/Inputs/Label';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';
import NftCard from '../atlas-components/NftCard';
import { ThreeDotsSvg } from '../atlas-assets';
import { BorderGradientButton } from '../atlas-components/Buttons/BorderGradientButton';
import { useHistory } from 'react-router';
import CustomFetch from '../utils/CustomFetch';
import { SERVER_URL } from '../config/constants';
import { useWallet } from '@solana/wallet-adapter-react';
import { getAndReturnApiData } from '../utils/ApiHandle';

const MyCollections = ({ history }) => {
  const classes = useStyles();

  const wallet = useWallet();

  const [collections, setCollections] = useState([]);

  useEffect(() => {
    if (wallet.publicKey) {
      getCollections(wallet.publicKey.toBase58());
    }
  }, [wallet.publicKey]);

  const getCollections = async publicKey => {
    let response = await getAndReturnApiData(
      'collection/getCollection',
      publicKey,
    );

    setCollections(response);
  };

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
            text="My Collections"
            fontWeight={700}
            fontSize="4rem"
            lineHeight="4rem"
          />
          <Label
            text="Create, curate, and manage collections of unique NFTs to share and sell."
            fontSize="1.8rem"
            lineHeight="2.7rem"
            marginBottom={0}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <GradientButton
            onClick={() => history.push('/create-collection')}
            className={classes.createCollectionBtn}
          >
            <Label
              text="Create Collection"
              fontWeight={600}
              fontSize="2.2rem"
              lineHeight="3.3rem"
              marginBottom={0}
            />
          </GradientButton>

          <Box className={classes.threeDotsContainer}>
            <img src={ThreeDotsSvg.src} style={{ height: '4rem' }} />
          </Box>
        </Box>
      </Box>

      <Box marginBottom="10rem">
        <Box display="flex" flexWrap="wrap">
          {collections.map((collection, index) => (
            <NftCard
              collection={collection}
              key={index}
              onClick={() => history.push(`/collection/${collection._id}`)}
            />
          ))}
        </Box>
      </Box>

      {/* <Box display="flex" justifyContent="center">
        <BorderGradientButton className={classes.loadMoreBtn}>
          <Typography className={classes.gradientText}>Load More</Typography>
        </BorderGradientButton>
      </Box> */}
    </Box>
  );
};

export default MyCollections;

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
