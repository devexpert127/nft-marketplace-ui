import { Box, makeStyles, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useState } from 'react';
import {
  ChooseImage2Svg,
  ChooseImage3Svg,
  ChooseImageSvg,
} from '../atlas-assets';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';
import CollectionForm from '../atlas-components/CreateCollection/CollectionForm';
import Label from '../atlas-components/Inputs/Label';
import { SERVER_URL } from '../config/constants';
import CustomFetch from '../utils/CustomFetch';

const CreateNewCollection = () => {
  const classes = useStyles();

  const [previewLogoSource, setPreviewLogoSource] = useState(null);
  const [previewFeaturedImageSource, setPreviewFeaturedImageSource] =
    useState(null);

  const [collectionData, setCollectionData] = useState({
    name: 'Bilal Ahmad v2',
    url: '',
    description: 'Same wherever i go',
    activeLink: '',
    explicitContent: '',
    telegramUrl: '',
    discordUrl: '',
    flickrUrl: '',
    instagramUrl: '',
    dribbleUrl: '',
    twitterUrl: '',
  });

  const wallet = useWallet();

  const fileHandlerLogo = async e => {
    if (e.target.files[0]) {
      console.log('fileHandlerLogo => ', e.target.files[0]);

      previewFile(e.target.files[0], setPreviewLogoSource);
    }
  };

  const fileHandlerFeaturedImage = async e => {
    if (e.target.files[0]) {
      console.log('fileHandlerFeaturedImage => ', e.target.files[0]);

      previewFile(e.target.files[0], setPreviewFeaturedImageSource);
    }
  };

  const previewFile = (file, callback) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      callback(reader.result);
    };
  };

  const onCreate = async () => {
    console.log({ collectionData });
    if (collectionData.name && collectionData.description && wallet.publicKey) {
      try {
        let response = await CustomFetch(
          `${SERVER_URL}/collection/addCollection`,
          { ...collectionData, owner: wallet.publicKey.toBase58() },
        );
        console.log({ response });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box className={classes.container}>
      <Typography className={classes.heading}>Create New Collection</Typography>

      <Box className={classes.containerContent}>
        <Box className={classes.containerContentUpper}>
          <Box className={classes.uploadLogoBox}>
            {previewLogoSource ? (
              <>
                <Box
                  className={classes.removeIcon}
                  onClick={() => setPreviewLogoSource(null)}
                >
                  <Close style={{ color: '#fff', fontSize: '3rem' }} />
                </Box>

                <Box
                  style={{ textAlign: 'center', height: '100%', width: '100%' }}
                >
                  <img
                    src={previewLogoSources.src}
                    style={{ height: '100%' }}
                  />
                </Box>
              </>
            ) : (
              <>
                <Typography className={classes.uploadLogoBoxHeading}>
                  Upload Logo
                </Typography>
                <Box className={classes.uploadLogoBoxBottom}>
                  <input
                    type="file"
                    onChange={fileHandlerLogo}
                    id="upload"
                    hidden
                  />
                  <label htmlFor="upload" className={classes.uploadInput}>
                    <Box className={classes.uploadLogoBoxPicker}>
                      <img src={ChooseImageSvg.src} />
                    </Box>
                  </label>
                  <Box className={classes.uploadLogoBoxTextContainer}>
                    <Typography className={classes.uploadLogoBoxText}>
                      Drag & Drop file or Browse file from your computer
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
          <Box className={classes.uploadImageBox}>
            {previewFeaturedImageSource ? (
              <>
                <Box
                  className={classes.removeIcon}
                  onClick={() => setPreviewFeaturedImageSource(null)}
                >
                  <Close style={{ color: '#fff', fontSize: '3rem' }} />
                </Box>

                <Box
                  style={{ textAlign: 'center', height: '100%', width: '100%' }}
                >
                  <img
                    src={previewFeaturedImageSource.src}
                    style={{ height: '100%' }}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Typography className={classes.uploadImageBoxHeading}>
                    Upload Featured Image
                  </Typography>
                  <Box className={classes.uploadImageBoxTextContainer}>
                    <Typography className={classes.uploadImageBoxText}>
                      This image will be used for featuring your collection on
                      the homepage, category pages, or other promotional areas
                      of OpenSea. 600 x 400 recommended.
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.uploadImageBoxBottom}>
                  <input
                    type="file"
                    onChange={fileHandlerFeaturedImage}
                    id="uploadF"
                    hidden
                  />
                  <label htmlFor="uploadF" className={classes.uploadInput}>
                    <Box className={classes.uploadImageBoxPicker}>
                      <img src={ChooseImage2Svg.src} />
                    </Box>
                  </label>
                </Box>
              </>
            )}
          </Box>
        </Box>{' '}
        <Box className={classes.uploadImageBox} marginBottom="6rem">
          <Box>
            <Typography className={classes.uploadImageBoxHeading}>
              Banner Image
            </Typography>
            <Box className={classes.uploadImageBoxTextContainer}>
              <Typography className={classes.uploadImageBoxText}>
                This image will appear at the top of your collection page. Avoid
                including too much text in this banner image, as the dimensions
                change on different devices. 1400 x 400 recommended.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.uploadImageBoxBottom}>
            <input type="file" onChange={() => {}} id="upload" hidden />
            <label htmlFor="upload" className={classes.uploadInput}>
              <Box
                className={classes.uploadImageBoxPicker}
                style={{ width: '70rem' }}
              >
                <img src={ChooseImage3Svg.src} />
              </Box>
            </label>
          </Box>
        </Box>
        <CollectionForm
          collectionData={collectionData}
          setCollectionData={setCollectionData}
        />
        <Box display="flex" justifyContent="center">
          <GradientButton
            className={classes.createBtn}
            onClick={onCreate}
            disabled={!(collectionData.name && collectionData.description)}
          >
            <Label
              text="Create"
              marginBottom={0}
              fontSize={'2.2rem'}
              lineHeight="3.3rem"
              fontWeight={600}
            />
          </GradientButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewCollection;
const useStyles = makeStyles(theme => ({
  container: {
    background: '#000',
    // height: "100%",
  },
  heading: {
    fontWeight: 700,
    fontSize: '4rem',
    lineHeight: '8rem',
    color: '#fff',
    marginBottom: '3rem',
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
  },

  containerContentUpper: {
    display: 'flex',

    marginBottom: '2.4rem',
  },

  uploadLogoBox: {
    background: '#121522',
    borderRadius: 10,
    flex: 2,
    height: '25rem',
    padding: '2rem',
    marginRight: '2rem',
    position: 'relative',
  },
  uploadLogoBoxHeading: {
    fontWeight: 500,
    fontSize: '2.4rem',
    lineHeight: '3.6rem',
    color: '#fff',
    marginBottom: '3rem',
  },

  uploadLogoBoxBottom: {
    display: 'flex',

    alignItems: 'center',
  },

  uploadLogoBoxPicker: {
    height: '12rem',
    width: '12rem',
    borderRadius: 100,
    border: '1px dashed #fff',
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  uploadLogoBoxTextContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  uploadLogoBoxText: {
    fontWeight: 400,
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    color: '#8E8E8E',
    textAlign: 'center',
    maxWidth: '25rem',
  },
  uploadImageBox: {
    background: '#121522',
    borderRadius: 10,
    flex: 3,
    height: '25rem',
    padding: '2rem',
    display: 'flex',
    // alignItems: "center",
    justifyContent: 'space-between',
    position: 'relative',
  },

  uploadImageBoxHeading: {
    fontWeight: 500,
    fontSize: '2.4rem',
    lineHeight: '3.6rem',
    color: '#fff',
    marginBottom: '3rem',
  },

  uploadImageBoxBottom: {
    display: 'flex',

    alignItems: 'center',
  },

  uploadImageBoxPicker: {
    height: '18rem',
    width: '25rem',
    borderRadius: 10,
    border: '1px dashed #fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  uploadImageBoxTextContainer: {},
  uploadImageBoxText: {
    fontWeight: 400,
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    color: '#8E8E8E',

    maxWidth: '40rem',
  },

  createBtn: {
    width: '25rem',
    height: '6rem',
  },

  createBtnText: {},

  removeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: 'pointer',
  },
}));
