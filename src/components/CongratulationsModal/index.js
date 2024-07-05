import React from "react";
import Confetti from "react-confetti";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const CongratulationsModal = ({ open, onClose }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Parabéns!</DialogTitle>
        <DialogContent>
          <DialogContentText>Você acertou todas as palavras!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      {open && <Confetti style={{ zIndex: 9999 }} numberOfPieces={100} />}
    </>
  );
};

export default CongratulationsModal;
