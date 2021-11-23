import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {
  ArrowRightUpSquareSvg,
  NftImageSvg,
  NftSvg1,
  RefreshSvg,
  ShareSvg,
  SingleNftSvg,
  SolanaLogo2Svg,
  ThreeDotsSvg,
} from '../atlas-assets';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';
import Label from '../atlas-components/Inputs/Label';
import MoreFromThisCollection from '../atlas-components/Misc/MoreFromThisCollection';
import NftTradingHistory from '../atlas-components/Misc/NftTradingHistory';
import SingleNftContractInfo from '../atlas-components/Misc/SingleNftContractInfo';
import CheckoutModal from '../atlas-components/Modals/CheckoutModal';

const SingleNft = () => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Box className={classes.imageContainer}>
            <img
              // src={SingleNftSvg.src}
              src="https://www.arweave.net/Hnd5n7yhHk7ROEWIWiTb_Jwxl3qJhC0AGA8bPTHJbDM?ext=jpg"
              style={{ height: '100%', width: '100%' }}
            />
          </Box>
          <Box className={classes.headerRight}>
            <Label
              text="#4326"
              fontSize="2.2rem"
              lineHeight="3.3rem"
              fontWeight={500}
              color="rgba(255, 255, 255, 0.5)"
            />

            <Label
              text="Abstract Painting Art"
              fontSize="3rem"
              lineHeight="4.5rem"
              fontWeight={600}
            />

            <Box display="flex" marginBottom="2rem">
              <Label
                text="Owned by:"
                fontSize="1.6rem"
                lineHeight="2.4rem"
                fontWeight={500}
                color="rgba(255, 255, 255, 0.5)"
                marginRight="1rem"
              />
              <Label
                text="CryptoZee"
                fontSize="1.6rem"
                lineHeight="2.4rem"
                fontWeight={500}
                color="rgba(172, 81, 255, 1)"
              />
            </Box>
            <Box display="flex" alignItems="center" marginBottom="3rem">
              <Box className={classes.actionBox}>
                <img src={ShareSvg.src} />
              </Box>
              <Box className={classes.actionBox}>
                <img src={RefreshSvg.src} />
              </Box>
              <Box className={classes.actionBox}>
                <img src={ArrowRightUpSquareSvg.src} />
              </Box>
              <Box className={classes.actionBox}>
                <img src={ThreeDotsSvg.src} />
              </Box>
            </Box>
            <Box maxWidth="90rem">
              <Label
                text="Simple and easily identifiable, each squiggle embodies the soul of the Art Blocks platform. Consider each my personal signature as an artist, developer, and tinkerer. Public minting of the Chromie Squiggle is permanently paused. They are now reserved for manual distribution to collectors and community members over a longer period of time. Please visit Atlas Finance to explore Squiggles available on the secondary market. Additional project feature(s) => Fuzzy, Starting Color: 117, End Color: 242, Color Spread: 42, Color Direction: Reverse, Height: 3, Segments: 16, Steps"
                fontSize="1.6rem"
                lineHeight="3.2rem"
                color="rgba(255, 255, 255, 0.5)"
              />
            </Box>

            <Box className={classes.divider}></Box>

            <Box>
              <Label
                text="Current price"
                fontSize="1.6rem"
                lineHeight="2.4rem"
                color="rgba(255, 255, 255, 0.5)"
                marginBottom="2rem"
              />

              <Box display="flex" alignItems="center" marginBottom="3rem">
                <img src={SolanaLogo2Svg.src} style={{ marginRight: '2rem' }} />
                <Label
                  text="26.50"
                  fontSize="3.6rem"
                  lineHeight="5.4rem"
                  fontWeight={600}
                  marginBottom={0}
                  marginRight="1rem"
                />
                <Label
                  text="($84,127.94) "
                  fontSize="2rem"
                  lineHeight="3rem"
                  marginBottom={0}
                  color="rgba(255, 255, 255, 0.5)"
                />
              </Box>
              <GradientButton
                className={classes.buyBtn}
                onClick={() => setShowModal(true)}
              >
                <Label
                  text="Buy"
                  marginBottom={0}
                  fontSize={'2.4rem'}
                  lineHeight="3.6rem"
                  fontWeight={500}
                />
              </GradientButton>
            </Box>
          </Box>
        </Box>

        <SingleNftContractInfo />
        <NftTradingHistory />
        <MoreFromThisCollection />
      </Box>
      <CheckoutModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default SingleNft;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
  },
  header: {
    display: 'flex',
    marginBottom: '5rem',
  },
  imageContainer: {
    height: '78rem',
    width: '68rem',
    marginRight: '4rem',
  },

  headerRight: {
    padding: '5rem 0',
  },

  actionBox: {
    background: 'rgba(140, 96, 237, 0.1)',
    borderRadius: 15,
    height: '5rem',
    width: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1.5rem',
  },

  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    margin: '5rem 0',
  },

  buyBtn: {
    width: '24rem',
    height: '7rem',
  },
}));
