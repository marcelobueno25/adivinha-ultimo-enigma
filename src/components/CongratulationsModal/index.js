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
  const handleSurprise = () => {
    window.location.href = "https://www.google.com/"; // replace with your surprise link
  };

  return (
    <>
      <Dialog
        open={open}
        //onClose={onClose}
        PaperProps={{
          style: {
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
          },
        }}
      >
        <DialogTitle style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Parabéns!
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              color: "white",
              marginBottom: "1.5rem",
              fontSize: "1.2rem",
            }}
          >
            Você acertou todas as palavras! Parabéns por completar o desafio.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", paddingBottom: "1rem" }}
        >
          <Button
            onClick={handleSurprise}
            color="secondary"
            variant="contained"
            size="large"
            style={{ fontSize: "1rem" }}
          >
            Surpresa!
          </Button>
        </DialogActions>
      </Dialog>
      {open && <Confetti style={{ zIndex: 9999 }} numberOfPieces={100} />}
    </>
  );
};

export default CongratulationsModal;
