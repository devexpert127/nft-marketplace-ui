import React from 'react';
import { Layout } from 'antd';

import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';
import useWindowDimensions from '../../utils/layout';
import AtlasHeader from '../../atlas-components/Header';
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import { IS_METAPLEX } from '../../config/constants';


const { Content,Header } = Layout;





const paddingForLayout = (width: number) => {
  if (width <= 768) return '5px 10px';
  if (width > 768) return '10px 30px';
};


const useStyles = makeStyles((theme) => {
  return {
    page: {
      padding: "5rem 8rem",

      [theme.breakpoints.down(1500)]: {
        padding: "4rem 6rem",
      },

      [theme.breakpoints.down(1100)]: {
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


export const AppLayout = React.memo((props: any) => {
  const { width } = useWindowDimensions();
  const classes = useStyles();


  return (
    <>
      <Layout
        title={LABELS.APP_TITLE}
        // style={{
        //   padding: paddingForLayout(width),
        //   maxWidth: 1000,
        // }}
      >
        
        {IS_METAPLEX ? 
        <>
        <Header className="App-Bar"
        style={{padding:"0 10rem"}}
        >
          <AppBar />
        </Header>
        <Content style={{ overflow: 'scroll', padding:"0 10rem"}}>
        {props.children}

        </Content> </>: 
        <div className={classes.page}>
        <AtlasHeader />
        {props.children}
      </div>
        
        }
          
          
      </Layout>
    </>
  );
});
