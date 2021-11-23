import { Backdrop, Box, Fade, makeStyles, Modal } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    // marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const CustomModal = ({ showModal, setShowModal, children }) => {
  const classes = useStyles();

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      BackdropComponent={Backdrop}
      className={classes.modal}
      BackdropProps={{
        timeout: 100,
      }}
    >
      <Fade in={showModal}>{children}</Fade>
    </Modal>
  );
};

export default CustomModal;
