import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Tabs from '../../atlas-components/Misc/Tabs';
import Input from '../Inputs/Input';
import InputWithLabel from '../Inputs/InputWithLabel';
import Label from '../Inputs/Label';

const PriceRatioBox = () => {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  const [price, setPrice] = useState('');

  const [minimumBid, setMinimumBid] = useState('');
  const [reservePrice, setReservePrice] = useState('');
  const [expirationBid, setExpirationBid] = useState('');

  return (
    <Box className={classes.container}>
      <Box className={classes.contentContainer}>
        <Tabs active={active} setActive={setActive} />

        {active === 0 ? (
          <Box>
            <Label
              text="Price"
              fontSize={'2.4rem'}
              lineHeight="3.6rem"
              fontWeight={500}
            />
            <Label
              text="Will be on sale until you transfer this item or cancel it."
              color="rgba(255,255,255,0.5)"
              fontSize="1.6rem"
              lineHeight="2.4rem"
              marginBottom="3.5rem"
            />
            <Input
              placeholder="Enter Price"
              value={price}
              setValue={setPrice}
            />
          </Box>
        ) : (
          <Box>
            <InputWithLabel
              labelText="Minimum bid"
              placeholder="Enter Price"
              labelFontWeight={500}
              // height="6rem"
              marginBottom="3rem"
              value={minimumBid}
              setValue={setMinimumBid}
            />
            <InputWithLabel
              labelText="Reserve Price"
              labelFontWeight={500}
              // height="6rem"
              placeholder="Enter Price"
              marginBottom="3rem"
              value={reservePrice}
              setValue={setReservePrice}
            />
            <InputWithLabel
              labelText="Expiration Date"
              placeholder="Auction will automatically end at this time."
              labelFontWeight={500}
              marginBottom="3rem"
              // height="6rem"
              value={expirationBid}
              setValue={setExpirationBid}
            />
          </Box>
        )}
        <Box className={classes.divider}></Box>

        <Box>
          <Label
            text="Summary"
            fontSize={'2.4rem'}
            lineHeight="3.6rem"
            fontWeight={500}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Label text="Sub-Total" fontSize={'2rem'} lineHeight="2.6rem" />
            <Label
              text="20.01 SOL"
              fontSize={'2.4rem'}
              lineHeight="3.6rem"
              fontWeight={500}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Label text="Service Fee" fontSize={'2rem'} lineHeight="2.6rem" />
            <Label text="3.2 %" fontSize={'2rem'} lineHeight="3rem" />
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Label
              text="You will receive"
              fontSize={'2rem'}
              lineHeight="2.6rem"
            />
            <Box>
              <Label
                text="20.01 SOL"
                fontSize={'3.4rem'}
                lineHeight="5.1rem"
                fontWeight={600}
                color="rgba(0, 166, 156, 1)"
              />
              <Label
                text="(2356.07 USDT)"
                fontSize={'2rem'}
                lineHeight="3rem"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceRatioBox;

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',

    background: '#121522',
    borderRadius: 20,
    marginBottom: '5rem',
    alignSelf: 'center',
    padding: '4rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  contentContainer: {
    width: '72rem',
  },

  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    margin: '5rem 0',
  },
}));
