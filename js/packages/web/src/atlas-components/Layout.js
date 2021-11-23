import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { initializeWeb3 } from "../contract/functions/functions";
import { setSolanaInstance } from "../redux";

import Header from "./Header";

const DRAWER_WIDTH = 250;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      padding: "5rem 8rem",

      [theme.breakpoints.down("1500")]: {
        padding: "4rem 6rem",
      },

      [theme.breakpoints.down("1100")]: {
        padding: "4rem",
      },
    },
    root: {
      // display: "flex",background: "#000",
      background: "#000",
      height: "100vh",
    },

    toolbar: theme.mixins.toolbar,

    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();

  useEffect(() => {}, [window["solana"]]);
  const dispatch = useDispatch();

  // window.onload = () => {
  //   dispatch(setSolanaInstance(window["solana"]));
  // };

  return (
    <div className={classes.root}>
      <Backdrop open={false} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {children && (
        <div className={classes.page}>
          <Header />
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;
