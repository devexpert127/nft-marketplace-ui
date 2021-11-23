import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  HomeView,
} from './views';
import { AdminView } from './views/admin';
import { BillingView } from './views/auction/billing';
import Landing from "./atlas-containers/Landing.js";
import CreateNft from './atlas-containers/CreateNft';
import Marketplace from './atlas-containers/Marketplace.js';
import SingleNft from './atlas-containers/SingleNft';
import Profile from './atlas-containers/Profile';
import { IS_METAPLEX } from './config/constants';
import CreateNewCollection from './atlas-containers/CreateNewCollection';
import MyCollections from './atlas-containers/MyCollections';
import Collection from './atlas-containers/Collection';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            <Route exact path="/admin" component={() => <AdminView />} />
            <Route
              exact
              path="/analytics"
              component={() => <AnalyticsView />}
            />
            <Route
              exact
              path="/art/create/:step_param?"
              component={() => <ArtCreateView />}
            />
            <Route
              exact
              path="/artworks/:id?"
              component={() => <ArtworksView />}
            />
            <Route exact path="/art/:id" component={() => <ArtView />} />
            <Route exact path="/artists/:id" component={() => <ArtistView />} />
            <Route exact path="/artists" component={() => <ArtistsView />} />
            <Route
              exact
              path="/auction/create/:step_param?"
              component={() => <AuctionCreateView />}
            />
            <Route
              exact
              path="/auction/:id"
              component={() => <AuctionView />}
            />
            <Route
              exact
              path="/auction/:id/billing"
              component={() => <BillingView />}
            />
            

            {IS_METAPLEX ? <Route path="/" component={() => <HomeView />} /> : <>
            <Route path="/landing" component={() => <Landing />} />
            <Route path="/create-nft" component={() => <CreateNft />} />
            <Route path="/marketplace" component={() => <Marketplace />} />
            <Route path="/single-nft" component={() => <SingleNft />} />
            <Route path="/profile" component={() => <Profile />} />
            <Route path="/create-collection" component={() => <CreateNewCollection />} />
            <Route path="/collections" component={MyCollections}
             />

             
            <Route
              
              path="/collection/:id"
              component={Collection}
            />
            </>
             }


            
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
