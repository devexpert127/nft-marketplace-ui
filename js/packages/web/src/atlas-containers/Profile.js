import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CopySvg, ProfileAvatarSvg, ProfileBanner } from '../atlas-assets';
import { BorderGradientButton } from '../atlas-components/Buttons/BorderGradientButton';
import Label from '../atlas-components/Inputs/Label';
import NftCard from '../atlas-components/NftCard';
import NftCard2 from '../atlas-components/NftCard2';

const Profile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.profileHeader}>
        <Box>
          <img
            src={ProfileBanner.src}
            style={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
          />
        </Box>

        <Box className={classes.profileAvatar}>
          <img src={ProfileAvatarSvg.src} />
        </Box>
      </Box>

      <Box className={classes.userDetails}>
        <Label
          text="Smith Paul"
          fontWeight={600}
          fontSize="3.4rem"
          lineHeight="5.1rem"
        />
        <Box display="flex" alignItems="center">
          <Label
            text="3J98t1WpEZ73CNmQviecryH9i..."
            fontWeight={500}
            fontSize="1.4rem"
            lineHeight="2.1rem"
            marginBottom={0}
          />
          <Box className={classes.copyContainer}>
            <img src={CopySvg.src} />
          </Box>
        </Box>
      </Box>

      <Box marginBottom="10rem" margin="0 7rem 10rem 7rem">
        <Box display="flex" justifyContent="space-between" marginBottom="5rem">
          <NftCard2 />
          <NftCard2 />
          <NftCard2 />
          <NftCard2 />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <NftCard2 />
          <NftCard2 />
          <NftCard2 />
          <NftCard2 />
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

export default Profile;
const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
  },

  profileHeader: {
    position: 'relative',
    marginBottom: '15rem',
  },

  profileAvatar: {
    position: 'absolute',
    bottom: '-10.5rem',
    left: '7rem',
    height: '21rem',
    width: '21rem',
    borderRadius: 100,
    overflow: 'hidden',
    border: '3px solid #000',
  },

  userDetails: {
    marginLeft: '7rem',
    marginBottom: '10rem',
  },

  copyContainer: {
    marginLeft: '1.5rem',
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
