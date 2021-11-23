import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { SolanaLogo2Svg } from '../../atlas-assets';
import Label from '../Inputs/Label';

const NftTradingHistory = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Label
        text="Trading History"
        fontSize="2.4rem"
        lineHeight="3.6rem"
        fontWeight={700}
        marginBottom="3rem"
      />

      <Box className={classes.tableContainer}>
        <Box className={classes.header}>
          <Box className={classes.col}>
            <Label
              text="Event"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="Price"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="From"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="To"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="Date"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={700}
              color="rgba(255, 255, 255, 0.5)"
            />
          </Box>
        </Box>
        <Box className={classes.row} marginBottom="1.5rem">
          <Box className={classes.col}>
            <Label
              text="Sale"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
          <Box className={classes.col}>
            <Box className={classes.iconCol}>
              <img
                src={SolanaLogo2Svg.src}
                style={{ height: '1.4rem', marginRight: '1rem' }}
              />
              <Label
                text="30"
                fontSize="1.8rem"
                lineHeight="2.7rem"
                fontWeight={500}
                marginBottom={0}
              />
            </Box>
          </Box>
          <Box className={classes.col}>
            <Label
              text="55A454"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="plr82"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>

          <Box className={classes.col}>
            <Label
              text="June 13, 2021"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
        </Box>
        <Box className={classes.row}>
          <Box className={classes.col}>
            <Label
              text="Sale"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
          <Box className={classes.col}>
            <Box className={classes.iconCol}>
              <img
                src={SolanaLogo2Svg.src}
                style={{ height: '1.4rem', marginRight: '1rem' }}
              />
              <Label
                text="30"
                fontSize="1.8rem"
                lineHeight="2.7rem"
                fontWeight={500}
                marginBottom={0}
              />
            </Box>
          </Box>
          <Box className={classes.col}>
            <Label
              text="55A454"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
          <Box className={classes.col}>
            <Label
              text="plr82"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>

          <Box className={classes.col}>
            <Label
              text="June 13, 2021"
              fontSize="1.8rem"
              lineHeight="2.7rem"
              fontWeight={500}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NftTradingHistory;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
    marginBottom: '5rem',
  },

  header: {
    display: 'flex',
    marginBottom: '2rem',
  },
  col: {
    flex: 1,
  },

  tableContainer: {
    background: '#121522',
    borderRadius: 10,
    padding: '2.5rem 5rem',
  },
  row: {
    display: 'flex',
  },

  iconCol: {
    display: 'flex',
    alignItems: 'center',
  },
}));
