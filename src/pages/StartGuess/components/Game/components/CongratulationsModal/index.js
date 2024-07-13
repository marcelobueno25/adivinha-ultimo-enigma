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

const CongratulationsModal = ({ open, onClose, handleNext }) => {
  const handleSurprise = () => handleNext();

  return (
    <>
      <Dialog
        open={open}
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
            Você acertou todas as palavras! <br />
            Clique no botão para Descobrir a Presente!
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
