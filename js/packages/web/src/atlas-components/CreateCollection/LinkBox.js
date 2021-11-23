import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {},

  linkIcon: {
    width: '7.5rem',
    height: '7.5rem',
    background: '#121522',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: ({ active }) =>
      active ? '2px solid #fff' : '2px solid transparent',

    cursor: 'pointer',
  },
}));

const LinkBox = ({ icon, active, onClick }) => {
  const classes = useStyles({ active });

  return (
    <Box className={classes.linkIcon} onClick={onClick}>
      <img src={icon.src} />
    </Box>
  );
};

export default LinkBox;
