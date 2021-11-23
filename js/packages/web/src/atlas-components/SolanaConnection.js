import React, { useState, useEffect } from "react";
import {
  Connection,
  PublicKey,
  Transaction,
  clusterApiUrl,
  SystemProgram,
} from "@solana/web3.js";

import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setSolanaInstance, setWalletData } from "../redux";

const NETWORK = clusterApiUrl("testnet");

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    padding: "0 10rem",
  },
}));

const getProvider = () => {
  if ("solana" in window) {
    const anyWindow = window;
    const provider = anyWindow.solana;
    if (provider.isPhantom) {
      return provider;
    }

    return provider;
  }
  //   window.open("https://phantom.app/", "_blank");
};

const SolanaConnection = () => {
  const classes = useStyles();

  const [provider, setProvider] = useState(null);

  const [log, addLog] = useState("");

  const connection = new Connection(NETWORK);

  const solanaInstance = useSelector((state) => state.web3.solanaInstance);

  console.log("Solana Instance =< ", solanaInstance);

  const dispatch = useDispatch();

  useEffect(() => {}, [window.solana]);

  useEffect(() => {
    if (solanaInstance) {
      setProvider(solanaInstance);
    }
  }, [solanaInstance]);

  useEffect(() => {
    if (provider) {
      provider.connect();
      provider.on("connect", () => {
        console.log("Connected to wallet " + provider.publicKey?.toBase58());

        dispatch(setWalletData(provider));
      });
      provider.on("disconnect", () => {
        console.log("Disconnected from wallet");
        dispatch(setWalletData(null));
      });
      // try to eagerly connect
      return () => {
        provider.disconnect();
      };
    }
  }, [provider]);

  const createTransferTransaction = async () => {
    if (!provider.publicKey) {
      return;
    }
    let transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: "5QZQajjQqh6H8gaF9sNn7Xd9v1QHjaGuqjfc2Xkwxipd",
        // lamports: 1000000000,
        lamports: 1000000,
      })
    );
    transaction.feePayer = provider.publicKey;
    addLog("Getting recent blockhash");
    const anyTransaction = transaction;
    anyTransaction.recentBlockhash = (
      await connection.getRecentBlockhash()
    ).blockhash;
    console.log("transaction => ", transaction);
    return transaction;
  };

  const sendTransaction = async () => {
    const transaction = await createTransferTransaction();
    if (transaction) {
      try {
        let signed = await provider.signTransaction(transaction);
        addLog("Got signature, submitting transaction");
        let signature = await connection.sendRawTransaction(signed.serialize());
        addLog(
          "Submitted transaction " + signature + ", awaiting confirmation"
        );
        await connection.confirmTransaction(signature);
        addLog("Transaction " + signature + " confirmed");
      } catch (err) {
        console.warn(err);
        addLog("Error: " + JSON.stringify(err));
      }
    }
  };
  return (
    // <Box className={classes.container}>
    //   <Button onClick={sendTransaction}>Send TX</Button>
    //   <Typography>{log}</Typography>
    //   <Button onClick={() => provider.connect()}>Connect</Button>
    //   <Button onClick={() => provider.disconnect()}>Disconnect</Button>
    // </Box>
    <></>
  );
};

export default SolanaConnection;
