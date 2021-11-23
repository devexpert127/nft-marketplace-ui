import React, { useCallback, useEffect } from "react";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";

import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

import { storeWeb3Context } from "../redux";

const ConnectWallet = () => {
  const web3context = useWeb3React();

  const getErrorMessage = (e) => {
    if (e instanceof UnsupportedChainIdError) {
      return "Unsupported Network";
    } else if (e instanceof NoEthereumProviderError) {
      return "No Wallet Found";
    } else if (e instanceof UserRejectedRequestError) {
      return "Wallet Connection Rejected";
    } else if (e.code === -32002) {
      return "Wallet Connection Request Pending";
    } else {
      return "An Error Occurred";
    }
  };

  const activateWallet = useCallback(
    (connector, onClose = () => {}) => {
      if (
        connector instanceof WalletConnectConnector &&
        connector.walletConnectProvider?.wc?.uri
      ) {
        connector.walletConnectProvider = undefined;
      }

      web3context
        .activate(
          connector
            ? connector
            : new InjectedConnector({
                supportedChainIds: [1, 3, 4, 5, 42, 97, 56],
              }),
          undefined,
          true
        )
        .then(() => {
          //   setLoadingF({ walletConnection: false });
          //getJWTF(web3context.account, Date.now());
        })
        .catch((e) => {
          const err = getErrorMessage(e);

          console.error("ERROR activateWallet -> ", e);
          //   setLoadingF({ walletConnection: false });
        });
    },
    [web3context]
  );

  useEffect(() => {
    if (web3context?.library?._provider) {
      //console.log(web3context.library._provider);
      //   setWeb3Provider(web3context.library._provider);
    }
    if (web3context?.error) {
      web3context.deactivate();
    }
    if (web3context.active || web3context.account) {
    }
  }, [web3context]);

  useEffect(() => {
    activateWallet();
  }, []);
  return <div></div>;
};

export default ConnectWallet;
