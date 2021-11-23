import { Box, makeStyles, Typography } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

const CollectionsDropdown = ({ borderRadius, options, handleChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [currentOption, setCurrentOption] = useState(0);
  const classes = useStyles({ showDropdown, borderRadius });

  useEffect(() => {
    setShowDropdown(false);
    handleChange(options[currentOption]);
  }, [currentOption]);

  return (
    <Box className={classes.container}>
      <Box
        className={classes.itemShowContainer}
        onClick={() => setShowDropdown(val => !val)}
      >
        <Box className={classes.currentItem}>
          <Typography className={classes.currentItemText}>
            {options[currentOption]?.name}
          </Typography>
        </Box>
        <KeyboardArrowDown style={{ color: '#fff', fontSize: '3rem' }} />
      </Box>

      {showDropdown && (
        <Box className={classes.itemsContainer}>
          {options.map((option, index) => (
            <Box
              className={classes.item}
              onClick={() => setCurrentOption(index)}
              key={index}
            >
              <Typography className={classes.itemText}>
                {options[index].name}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CollectionsDropdown;

const useStyles = makeStyles(theme => ({
  container: {
    background: 'red',
    height: '5rem',
    width: '100%',
    marginBottom: '2rem',

    background: ({ background }) => (background ? background : 'transparent'),
    border: '1px solid rgba(255, 255, 255, 0.5)',

    borderRadius: '10px',

    cursor: 'pointer',

    position: 'relative',
  },

  currentItem: {},

  currentItemText: {
    fontSize: '1.8rem',
    lineHeight: '2.6rem',
    fontWeight: 400,
    color: '#fff',
  },

  item: {
    padding: '2rem',
  },

  itemText: {
    fontSize: '1.8rem',
    lineHeight: '2.6rem',
    fontWeight: 400,
    color: '#fff',
  },

  itemsContainer: {
    position: 'absolute',
    top: '5rem',
    width: '100%',

    background: ({ background }) => (background ? background : '#121522'),
    border: ({ border }) => border && '1px solid rgba(255, 255, 255, 0.5)',

    zIndex: 10000,
    borderRadius: '10px',
  },

  itemShowContainer: {
    padding: '0 2rem',

    height: '100%',
    // width: "100%",
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
