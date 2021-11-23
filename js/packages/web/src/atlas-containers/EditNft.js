import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { ChooseImage90x90, NftImageSvg } from '../atlas-assets';
import { BorderGradientButton } from '../atlas-components/Buttons/BorderGradientButton';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';
import GutterVertical from '../atlas-components/GutterVertical';
import InputWithLabel from '../atlas-components/Inputs/InputWithLabel';
import Label from '../atlas-components/Inputs/Label';
import Checkbox from '../atlas-components/Misc/Checkbox';
import PriceRatioBox from '../atlas-components/Misc/PriceRatioBox';
import Tabs from '../atlas-components/Misc/Tabs';

const EditNft = () => {
  const classes = useStyles();

  const [nftName, setNftName] = useState('');

  const [description, setDescription] = useState('');

  const [externalLink, setExternalLink] = useState('');

  const [collectionName, setCollectionName] = useState('');

  const [explicitContent, showExplicitContent] = useState(false);

  const [putOnMarketPlace, setPutOnMarketPlace] = useState(false);

  return (
    <Box className={classes.container}>
      <Label
        text="Edit your NFT"
        fontWeight={700}
        fontSize="4rem"
        lineHeight="8rem"
        marginBottom="3rem"
      />

      <Box className={classes.containerContent}>
        <Box display="flex">
          <Box flex={1}>
            <InputWithLabel
              labelText="Name"
              placeholder="Kitty"
              value={nftName}
              setValue={setNftName}
              marginBottom="5rem"
            />

            <InputWithLabel
              labelText="Description"
              placeholder="Ciao! I'm Kitty #5770. In high school, I was voted school jock. I was voted school jock in college. Let's pawty!"
              height="17.5rem"
              value={description}
              setValue={setDescription}
              marginBottom="5rem"
            />
          </Box>
          <GutterVertical />

          <Box flex={1}>
            <Label text="Upload File" />
            <Box className={classes.fileBox}>
              <Button className={classes.changeBtn}>
                <Label
                  text="Change"
                  fontSize="1.2rem"
                  lineHeight="1.8rem"
                  marginBottom={0}
                />
              </Button>
              {/* <Label
                text="Jpg, Png, Gif, Svg, Webm. Max 100mb."
                fontSize="2rem"
                lineHeight="3rem"
                color="rgba(255,255,255,0.5)"
                marginBottom="4rem"
              />
              <img src={ChooseImage90x90} style={{ marginBottom: "3rem" }} />

              <Label
                text="Drag and Drop File or  browse media on your device"
                fontSize="1.4rem"
                lineHeight="2.1rem"
                fontWeight={500}
                color="rgba(255, 255, 255, 0.5)"
              /> */}
              <img src={NftImageSvg} style={{ height: '20rem' }} />
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" marginBottom="5rem">
          <InputWithLabel
            labelText="External Link"
            placeholder="https://yoursite.com/item/itemId"
            value={externalLink}
            setValue={setExternalLink}
          />{' '}
          <GutterVertical />
          <InputWithLabel
            labelText="Collection"
            placeholder="Dashing Cats"
            value={collectionName}
            setValue={setCollectionName}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom="10rem">
          <Box
            flex={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginRight="4rem"
          >
            <Box>
              <Label text="Explicit & sensitive content" />
              <Label
                text="Set this collection as explicit and sensitive content"
                fontSize="1.6rem"
                lineHeight="2.6rem"
                fontWeight={400}
                color="rgba(255,255,255,.5)"
                marginBottom={0}
              />
            </Box>
            <Checkbox
              checked={explicitContent}
              setChecked={() => showExplicitContent(val => !val)}
            />
          </Box>
          <Box
            flex={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Label text="Put on Marketplace" />
              <Label
                text="You can add item on marketplace anytime"
                fontSize="1.6rem"
                lineHeight="2.6rem"
                fontWeight={400}
                color="rgba(255,255,255,.5)"
                marginBottom={0}
              />
            </Box>
            <Checkbox
              checked={putOnMarketPlace}
              setChecked={() => setPutOnMarketPlace(val => !val)}
            />
          </Box>
        </Box>
        {putOnMarketPlace && <PriceRatioBox />}
        <Box display="flex" justifyContent="center">
          <GradientButton
            className={classes.createBtn}
            style={{ marginRight: '2rem' }}
          >
            <Label
              text="Save Changes"
              marginBottom={0}
              fontSize={'2.2rem'}
              lineHeight="3.3rem"
              fontWeight={600}
            />
          </GradientButton>
          <BorderGradientButton className={classes.createBtn}>
            <Label
              text="Delete Item"
              marginBottom={0}
              fontSize={'2.2rem'}
              lineHeight="3.3rem"
              fontWeight={600}
            />
          </BorderGradientButton>
        </Box>
      </Box>
    </Box>
  );
};

export default EditNft;

const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
  },

  containerContent: {
    // height: "140rem",
    // width: "160rem",
    background: 'rgba(18, 21, 34, .5)',
    // opacity: 0.5,
    borderRadius: 10,
    padding: '5rem 8rem',

    [theme.breakpoints.down('1500')]: {
      padding: '4rem 5rem',
    },

    [theme.breakpoints.down('1100')]: {
      padding: '4rem',
    },

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  fileBox: {
    border: '1px dotted #fff',
    height: '33rem',
    borderRadius: 10,

    display: 'flex',
    padding: '1.5rem',
    alignItems: 'center',
    flexDirection: 'column',
  },
  createBtn: {
    width: '25rem',
    height: '6rem',
  },

  changeBtn: {
    width: '11rem',
    height: '3.2rem',
    alignSelf: 'flex-end',
  },

  priceRatioBox: {
    width: '100%',
    height: '75rem',
    background: '#121522',
    borderRadius: 20,
    marginBottom: '5rem',
    alignSelf: 'center',
    padding: '4rem',
    justifyContent: 'center',
    display: 'flex',
  },
}));
