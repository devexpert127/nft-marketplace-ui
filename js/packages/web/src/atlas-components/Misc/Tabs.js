import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Label from '../../atlas-components/Inputs/Label';

const Tabs = ({ active, setActive }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        className={[active === 0 ? classes.activeBox : classes.inactiveBox]}
        onClick={() => setActive(0)}
      >
        <Label
          text="Set Fixed Price"
          fontSize="2.2rem"
          lineHeight="2.6rem"
          fontWeight={500}
          marginBottom={0}
        />
      </Box>
      <Box
        className={[active === 1 ? classes.activeBox : classes.inactiveBox]}
        onClick={() => setActive(1)}
      >
        <Label
          text="Set Highest Bid"
          fontSize="2.2rem"
          lineHeight="2.6rem"
          fontWeight={500}
          marginBottom={0}
        />
      </Box>
    </Box>
  );
};

export default Tabs;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#010613',
    borderRadius: '5rem',
    width: '100%',
    height: '8rem',

    display: 'flex',
    padding: '5px',
    marginBottom: '7rem',
  },

  inactiveBox: {
    height: '100%',
    // background: "#121522",
    borderRadius: '5rem',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  activeBox: {
    height: '100%',
    background: '#121522',
    borderRadius: '5rem',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));
