import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import "./styles.scss";

const ModalWindow = ({ name, open, onClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ className: "modal-window" }}
      fullScreen
    >
      <div className="modal-title-bar">
        <span className="modal-title">{name}</span>
        <div className="modal-controls">
          <IconButton className="modal-button" onClick={onClose}>
            <img src="/img/icons/close.png" alt="Close" />
          </IconButton>
        </div>
      </div>
      <div className="modal-toolbar">
        <button>File</button>
        <button>Edit</button>
        <button>View</button>
        <button>Favorites</button>
        <button>Help</button>
      </div>
      <div className="modal-address-bar">
        <span>Address:</span>
        <input type="text" value="https://www.themesberg.com" readOnly />
      </div>
      <DialogContent className="modal-content">{children}</DialogContent>
      <DialogActions className="modal-actions">
        {/* <Button onClick={onClose}>Fechar</Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
