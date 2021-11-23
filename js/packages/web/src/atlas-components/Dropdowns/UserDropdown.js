import { Box, Button, makeStyles, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import {
  CollectionsSvg,
  FavoriteSvg,
  LogoutSvg,
  ProfileAvatarSvg,
  ProfileSvg,
  UsernameSvg,
} from '../../atlas-assets';

// import { ArrowDownSvg } from "../atlas-assets";

const UserDropdown = ({ borderRadius }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [currentOption, setCurrentOption] = useState(0);
  const classes = useStyles({ showDropdown, borderRadius });

  useEffect(() => {
    setShowDropdown(false);
  }, [currentOption]);

  let options = ['Advanced Settings', 'Liquidity Resources', 'Custom Tokens'];
  return (
    <Box className={classes.container}>
      <Box
        className={classes.itemShowContainer}
        onClick={() => setShowDropdown(val => !val)}
      >
        <Typography className={classes.btnText}>Smith Paul</Typography>
        <Box>
          <img
            src={ProfileAvatarSvg}
            style={{
              height: '5rem',
              width: '5rem',
              borderRadius: 100,
              marginLeft: '1.5rem',
            }}
          />
        </Box>
      </Box>

      {showDropdown && (
        <Box className={classes.itemsContainer}>
          <Box className={classes.item} onClick={() => setCurrentOption(0)}>
            <Box className={classes.iconContainer}>
              <img src={ProfileSvg} />
            </Box>
            <Typography className={classes.itemText}>My Profile</Typography>
            <Box onClick={() => setShowDropdown(false)}>
              {/* <img src={CancelSvg} style={{ height: 12, width: 12 }} /> */}
            </Box>
          </Box>
          <Box className={classes.divider}></Box>
          <Box className={classes.item} onClick={() => setCurrentOption(0)}>
            <Box className={classes.iconContainer}>
              <img src={CollectionsSvg} />
            </Box>
            <Typography className={classes.itemText}>My Collections</Typography>
            <Box onClick={() => setShowDropdown(false)}>
              {/* <img src={CancelSvg} style={{ height: 12, width: 12 }} /> */}
            </Box>
          </Box>
          <Box className={classes.divider}></Box>
          <Box className={classes.item} onClick={() => setCurrentOption(0)}>
            <Box className={classes.iconContainer}>
              <img src={FavoriteSvg} />
            </Box>
            <Typography className={classes.itemText}>My Favorites</Typography>
            <Box onClick={() => setShowDropdown(false)}>
              {/* <img src={CancelSvg} style={{ height: 12, width: 12 }} /> */}
            </Box>
          </Box>
          <Box className={classes.divider}></Box>
          <Box className={classes.item} onClick={() => setCurrentOption(0)}>
            <Box className={classes.iconContainer}>
              <img src={UsernameSvg} />
            </Box>
            <Typography className={classes.itemText}>
              Change Username
            </Typography>
            <Box onClick={() => setShowDropdown(false)}>
              {/* <img src={CancelSvg} style={{ height: 12, width: 12 }} /> */}
            </Box>
          </Box>
          <Box className={classes.divider}></Box>
          <Box className={classes.item} onClick={() => setCurrentOption(0)}>
            <Box className={classes.iconContainer}>
              <img src={LogoutSvg} />
            </Box>
            <Typography className={classes.itemText}>Log Out</Typography>
            <Box onClick={() => setShowDropdown(false)}>
              {/* <img src={CancelSvg} style={{ height: 12, width: 12 }} /> */}
            </Box>
          </Box>
          <Box className={classes.divider}></Box>
        </Box>
      )}
    </Box>
  );
};

export default UserDropdown;

const useStyles = makeStyles(theme => ({
  container: {
    // width: "18rem",
    // marginBottom: "3rem",

    // background: "#0F0824",
    // border: "1px solid rgba(255, 255, 255, 0.08)",
    // borderRadius: ({ showDropdown, borderRadius }) =>
    //   borderRadius ? borderRadius : showDropdown ? "10px 10px 0 0" : 10,
    cursor: 'pointer',

    position: 'relative',
  },

  currentItem: {
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    fontWeight: 400,
    color: '#fff',
  },

  item: {
    padding: '1.8rem 0',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      opacity: 0.7,
    },
  },

  itemText: {
    fontSize: '1.8rem',
    lineHeight: '2.7rem',
    fontWeight: 500,
    color: '#fff',
  },

  itemsContainer: {
    position: 'absolute',
    top: '4rem',
    right: '2rem',
    width: '28rem',

    background: '#121522',
    boxShadow: '0px 6px 40px rgba(2, 6, 22, 0.3)',
    borderRadius: '20px',
    zIndex: 10000,
    padding: '2rem',
  },

  itemShowContainer: {
    padding: '0 2rem',

    // height: "100%",
    // width: "100%",
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'space-between',
  },

  divider: {
    background: 'rgba(255, 255, 255, 0.15)',
    height: '1px',
  },
  btnText: {
    fontWeight: 600,
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    color: '#fff',
  },
  iconContainer: {
    marginRight: '1.8rem',
  },
}));
