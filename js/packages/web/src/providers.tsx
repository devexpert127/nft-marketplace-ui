import {
  AccountsProvider,
  ConnectionProvider,
  StoreProvider,
  WalletProvider,
  MetaProvider,
} from '@oyster/common';
import React, { FC } from 'react';
import { ConfettiProvider } from './components/Confetti';
import { AppLayout } from './components/Layout';
import { LoaderProvider } from './components/Loader';
import { CoingeckoProvider } from './contexts/coingecko';
import { ThemeProvider } from "@material-ui/styles";
import theme from './theme';




export const Providers: FC = ({ children }) => {
  return (
    <ConnectionProvider>
      <WalletProvider>
        <AccountsProvider>
          <CoingeckoProvider>
            <StoreProvider
              ownerAddress={process.env.NEXT_PUBLIC_STORE_OWNER_ADDRESS}
              storeAddress={process.env.NEXT_PUBLIC_STORE_ADDRESS}
            >
              <ThemeProvider theme={theme}>
              <MetaProvider>
                <LoaderProvider>
                  <ConfettiProvider>
                    <AppLayout>{children}</AppLayout>
                  </ConfettiProvider>
                </LoaderProvider>
              </MetaProvider></ThemeProvider>
            </StoreProvider>
          </CoingeckoProvider>
        </AccountsProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
