import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ChooseImage90x90, NftImageSvg } from '../atlas-assets';
import { BorderGradientButton } from '../atlas-components/Buttons/BorderGradientButton';
import { GradientButton } from '../atlas-components/Buttons/GradientButton';
import GutterVertical from '../atlas-components/GutterVertical';
import InputWithLabel from '../atlas-components/Inputs/InputWithLabel';
import Label from '../atlas-components/Inputs/Label';
import Checkbox from '../atlas-components/Misc/Checkbox';
import PriceRatioBox from '../atlas-components/Misc/PriceRatioBox';
import Tabs from '../atlas-components/Misc/Tabs';
import { Close } from '@material-ui/icons';
import CollectionsDropdown from '../atlas-components/Dropdowns/CollectionsDropdown';

import { Upload, Card, Steps, Spin } from 'antd';
import {
  useConnection,
  MAX_METADATA_LEN,
  useConnectionConfig,
  shortenAddress,
  Creator,
  MetaplexOverlay,
} from '@oyster/common';
import { MintLayout } from '@solana/spl-token';
import { getAssetCostToStore, LAMPORT_MULTIPLIER } from '../utils/assets';
import { mintNFT } from '../actions';
import { useWallet } from '@solana/wallet-adapter-react';

import {
  LoadingOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Congrats } from '../views/artCreate';
import CustomFetch from '../utils/CustomFetch';
import { SERVER_URL } from '../config/constants';
import { getAndReturnApiData } from '../utils/ApiHandle';

const { Step } = Steps;

// import { uploadFileAndGetLink } from '../redux/actions/web3Actions';

const { Dragger } = Upload;

const CreateNft = () => {
  const classes = useStyles();

  const [nftName, setNftName] = useState('Bilal Ahmad');

  const [description, setDescription] = useState('Can we do it?');

  const [externalLink, setExternalLink] = useState('www.google.com');

  const [collectionName, setCollectionName] = useState('');

  const [explicitContent, showExplicitContent] = useState(false);

  const [putOnMarketPlace, setPutOnMarketPlace] = useState(false);

  const [previewImageSource, setPreviewImageSource] = useState(null);

  const [collectionValue, setCollectionValue] = useState('');

  const [attributes, setAttributes] = useState({});

  const [coverFile, setCoverFile] = useState([]);

  const connection = useConnection();

  const { env } = useConnectionConfig();

  const [nft, setNft] = useState(null);

  const [nftCreateProgress, setNFTcreateProgress] = useState(0);

  const [creators, setCreators] = useState([]);

  const [showLoadingStats, setShowLoadingStats] = useState(false);

  const [apiNftData, setApiNftData] = useState({ send: false });

  const wallet = useWallet();

  const [collections, setCollections] = useState([]);

  const [data, setData] = useState({
    image: '',
    animation_url: '',
  });

  const getCollections = async publicKey => {
    let response = await getAndReturnApiData(
      'collection/getCollection',
      publicKey,
    );

    setCollections(
      response.map(_ => ({
        name: _.name,
        id: _._id,
      })),
    );
  };

  useEffect(() => {
    if (wallet.publicKey) {
      // getAllNfts(wallet.publicKey.toBase58());
      // getArtworkApiData();
      getCollections(wallet.publicKey.toBase58());
    }
  }, [wallet.publicKey]);

  const getArtworkApiData = async () => {
    try {
      let response = await CustomFetch(
        `http://arweave.net/9AuX62R-a6ob6LiOWba2pY2RncR6AENf4R2T-HnSlgc`,
        null,
        'get',
      );
      console.log({ response });
      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllNfts = async publicKey => {
    try {
      let response = await CustomFetch(
        `${SERVER_URL}/nft/getNFTs/${publicKey}`,
        null,
        'get',
      );
      console.log({ response });
      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  const onFileChangeHandler = async e => {
    if (e.target.files[0]) {
      console.log('onFileChangeHandler => ', e.target.files[0]);

      // setImage(e.target.files[0]);

      previewFile(e.target.files[0]);
    }
  };

  const LoadingStats = props => {
    console.log({ props });
    const setIconForStep = (currentStep, componentStep) => {
      if (currentStep === componentStep) {
        return <LoadingOutlined />;
      }
      return <></>;
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Spin size="large" /> */}

        <Card>
          <Steps direction="vertical" current={props.step}>
            <Step
              title="Minting"
              description="Starting Mint Process"
              icon={setIconForStep(props.step, 0)}
            />
            <Step
              title="Preparing Assets"
              icon={setIconForStep(props.step, 1)}
            />
            <Step
              title="Signing Metadata Transaction"
              description="Approve the transaction from your wallet"
              icon={setIconForStep(props.step, 2)}
            />
            <Step
              title="Sending Transaction to Solana"
              description="This will take a few seconds."
              icon={setIconForStep(props.step, 3)}
            />
            <Step
              title="Waiting for Initial Confirmation"
              icon={setIconForStep(props.step, 4)}
            />
            <Step
              title="Waiting for Final Confirmation"
              icon={setIconForStep(props.step, 5)}
            />
            <Step
              title="Uploading to Arweave"
              icon={setIconForStep(props.step, 6)}
            />
            <Step
              title="Updating Metadata"
              icon={setIconForStep(props.step, 7)}
            />
            <Step
              title="Signing Token Transaction"
              description="Approve the final transaction from your wallet"
              icon={setIconForStep(props.step, 8)}
            />
          </Steps>
        </Card>
      </div>
    );
  };

  const useArtworkFiles = (files, attributes) => {
    if (attributes.image) {
      const file = files.find(f => f.name === attributes.image);
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          setData(data => {
            return {
              ...(data || {}),
              image: event.target?.result || '',
            };
          });
        };
        if (file) reader.readAsDataURL(file);
      }
    }

    return data;
  };

  const previewFile = file => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImageSource(reader.result);
    };
  };

  const handleChange = async value => {
    setCollectionValue(value);
  };

  const onCreate = () => {
    console.log({ collectionName });
    if (wallet.publicKey) {
      const key = wallet.publicKey.toBase58();

      let creators = [
        {
          key,
          label: shortenAddress(key),
          value: key,
        },
      ];

      let creatorsStructs = creators.map(
        c =>
          new Creator({
            address: c.value,
            verified: c.value === wallet.publicKey?.toBase58(),
            share: 100,
          }),
      );

      let metaData = {
        ...attributes,

        name: nftName,
        description,
        externalLink,
        sellerFeeBasisPoints: 20 * 100,
        creators: creatorsStructs,
        symbol: '',

        properties: {
          category: 'image',
          ...attributes.properties,
          files: coverFile
            .filter(f => f)
            .map(f => {
              const uri = typeof f === 'string' ? f : f?.name || '';
              const type =
                typeof f === 'string' || !f
                  ? 'unknown'
                  : f.type || getLast(f.name.split('.')) || 'unknown';

              return {
                uri,
                type,
              };
            }),

          image: coverFile[0]?.name || '',
        },
      };

      setApiNftData(val => ({
        ...val,
        name: nftName,
        description,
        externalLink,
        sellerFeeBasisPoints: 20 * 100,
        creators: creatorsStructs,
        symbol: '',
        image: coverFile[0]?.name || '',
        collectionName: collectionValue.name,
        collectionId: collectionValue.id,
      }));
      setAttributes(metaData);

      const { image } = useArtworkFiles(coverFile, attributes);

      console.log({ image, coverFile, connection, metaData });

      const rentCall = Promise.all([
        connection.getMinimumBalanceForRentExemption(MintLayout.span),
        connection.getMinimumBalanceForRentExemption(MAX_METADATA_LEN),
      ]);

      if (coverFile.length)
        getAssetCostToStore([
          ...coverFile,
          new File([JSON.stringify(attributes)], 'metadata.json'),
        ]).then(async lamports => {
          const sol = lamports / LAMPORT_MULTIPLIER;

          // TODO: cache this and batch in one call
          const [mintRent, metadataRent] = await rentCall;

          // const uriStr = 'x';
          // let uriBuilder = '';
          // for (let i = 0; i < MAX_URI_LENGTH; i++) {
          //   uriBuilder += uriStr;
          // }

          const additionalSol = (metadataRent + mintRent) / LAMPORT_MULTIPLIER;

          // TODO: add fees based on number of transactions and signers
          console.log({ additionalSol });
          // setCost(sol + additionalSol);
          await mint(metaData);
        });

      console.log({ rentCall });
    }
  };

  // console.log({ attributes });

  useEffect(() => {
    if (apiNftData.send) {
      storeNftInApi();
    }
  }, [apiNftData]);

  const mint = async metaData => {
    try {
      console.log({
        connection,
        wallet,
        env,
        coverFile,
        metaData,
        setNFTcreateProgress,
      });

      setShowLoadingStats(true);
      const _nft = await mintNFT(
        connection,
        wallet,
        env,
        coverFile,
        metaData,
        setNFTcreateProgress,
        20,
        setApiNftData,
      );
      setShowLoadingStats(false);
      console.log({ _nft });

      if (_nft) {
        setNft(_nft);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      // setMinting(false);
    }
  };

  useEffect(() => {
    // storeNftInApi();
  }, []);

  const storeNftInApi = async () => {
    console.log({ apiNftData });
    try {
      let response = await CustomFetch(`${SERVER_URL}/nft/addNft`, apiNftData);
      console.log({ response });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.container}>
      {!nft && (
        <Label
          text="Create New NFT"
          fontWeight={700}
          fontSize="4rem"
          lineHeight="8rem"
          marginBottom="3rem"
        />
      )}
      <Box className={classes.containerContent}>
        {showLoadingStats ? (
          <LoadingStats step={nftCreateProgress} />
        ) : nft ? (
          <Congrats nft={nft} alert={''} />
        ) : (
          <>
            <Box display="flex">
              <Box flex={1}>
                <InputWithLabel
                  labelText="Name"
                  placeholder="Item Name"
                  value={nftName}
                  setValue={setNftName}
                  marginBottom="5rem"
                />

                <InputWithLabel
                  labelText="Description"
                  placeholder="Description of your item"
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
                  {previewImageSource ? (
                    <>
                      <Box
                        className={classes.removeIcon}
                        onClick={() => setPreviewImageSource(null)}
                      >
                        <Close style={{ color: '#fff', fontSize: '3rem' }} />
                      </Box>
                      <img src={previewImageSource} style={{ height: '90%' }} />
                    </>
                  ) : (
                    <Dragger
                      accept=".png,.jpg,.gif,.mp4,.svg"
                      multiple={false}
                      className={classes.dragger}
                      customRequest={info => {
                        // dont upload files here, handled outside of the control
                        info.onSuccess();
                      }}
                      // fileList={coverFile ? [coverFile as any] : []}
                      onChange={async info => {
                        const file = info.file.originFileObj;

                        console.log({ file });

                        if (!file) {
                          return;
                        }

                        previewFile(file);

                        // const sizeKB = file.size / 1024;

                        // if (sizeKB < 25) {
                        //   setCoverArtError(`The file ${file.name} is too small. It is ${Math.round(10 * sizeKB) / 10}KB but should be at least 25KB.`);
                        //   return;
                        // }

                        setCoverFile([file]);
                        // setCoverArtError(undefined);
                      }}
                    >
                      <Label
                        text="Jpg, Png, Gif, Svg, Webm. Max 100mb."
                        fontSize="2rem"
                        lineHeight="3rem"
                        color="rgba(255,255,255,0.5)"
                        marginBottom="4rem"
                      />
                      <img
                        src={ChooseImage90x90.src}
                        style={{ marginBottom: '3rem' }}
                      />

                      <Label
                        text="Drag and Drop File"
                        fontSize="1.4rem"
                        lineHeight="2.1rem"
                        fontWeight={500}
                        marginBottom={'5px'}
                      />

                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Label
                          text="or "
                          fontSize="1.4rem"
                          lineHeight="2.1rem"
                          fontWeight={500}
                          color="rgba(255, 255, 255, 0.5)"
                          marginRight="5px"
                        />
                        <Label
                          text="browse media "
                          fontSize="1.4rem"
                          lineHeight="2.1rem"
                          fontWeight={500}
                          marginRight="5px"
                        />{' '}
                        <Label
                          text="on your device"
                          fontSize="1.4rem"
                          lineHeight="2.1rem"
                          fontWeight={500}
                          color="rgba(255, 255, 255, 0.5)"
                        />
                      </Box>
                    </Dragger>
                  )}
                </Box>

                {/* {previewImageSource ? (
              <>
                <Box
                  className={classes.removeIcon}
                  onClick={() => setPreviewImageSource(null)}
                >
                  <Close style={{ color: '#fff', fontSize: '3rem' }} />
                </Box>
                <img src={previewImageSource} style={{ height: '90%' }} />
              </>
            ) : (
              <>
                <Label
                  text="Jpg, Png, Gif, Svg, Webm. Max 100mb."
                  fontSize="2rem"
                  lineHeight="3rem"
                  color="rgba(255,255,255,0.5)"
                  marginBottom="4rem"
                />
                <input
                  type="file"
                  onChange={onFileChangeHandler}
                  id="upload"
                  hidden
                />
                <label htmlFor="upload" className={classes.uploadInput}>
                  <img
                    src={ChooseImage90x90.src}
                    style={{ marginBottom: '3rem' }}
                  />
                </label>

                <Label
                  text="Drag and Drop File"
                  fontSize="1.4rem"
                  lineHeight="2.1rem"
                  fontWeight={500}
                  marginBottom={'5px'}
                />
                <Box display="flex" alignItems="center">
                  <Label
                    text="or "
                    fontSize="1.4rem"
                    lineHeight="2.1rem"
                    fontWeight={500}
                    color="rgba(255, 255, 255, 0.5)"
                    marginRight="5px"
                  />
                  <Label
                    text="browse media "
                    fontSize="1.4rem"
                    lineHeight="2.1rem"
                    fontWeight={500}
                    marginRight="5px"
                  />{' '}
                  <Label
                    text="on your device"
                    fontSize="1.4rem"
                    lineHeight="2.1rem"
                    fontWeight={500}
                    color="rgba(255, 255, 255, 0.5)"
                  />
                </Box>
              </>
            )} */}

                {/* <img src={NftImageSvg} style={{ height: "20rem" }} /> */}
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
              {/* <InputWithLabel
            labelText="Collection"
            placeholder="Select collection from the available list"
            value={collectionName}
            setValue={setCollectionName}
          /> */}
              <Box flex={1}>
                <Label
                  text="Collection"
                  fontSize="2.4rem"
                  lineHeight="3.6rem"
                />{' '}
                <CollectionsDropdown
                  handleChange={handleChange}
                  options={collections}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              marginBottom="10rem"
            >
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
                // onClick={() => console.log({ collectionValue })}
                onClick={onCreate}
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
          </>
        )}
      </Box>
    </Box>
  );
};

export default CreateNft;

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
    height: '33rem !important',
    borderRadius: 10,

    display: 'flex',
    padding: '1.5rem',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
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

  uploadInput: {
    cursor: 'pointer',
  },
  removeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: 'pointer',
  },

  dragger: {
    padding: 0,
    background: 'transparent !important',

    '&:hover': {
      borderColor: 'transparent !important',
    },
  },
}));
