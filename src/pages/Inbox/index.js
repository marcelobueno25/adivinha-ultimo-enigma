import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import inboxMgs from "../../assets/listInbox.png";
import inboxMenu from "../../assets/icons/iconsInbox.png";
import IconMSG from "../../assets/icons/msg.ico";
import "./styles.scss";
import { LOGIN_MSN } from "../../util/db";

const Inbox = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const TableMgs = () => {
    return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>De</TableCell>
              <TableCell>Assunto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              hover
              sx={{ cursor: "pointer" }}
              onClick={() => handleClick()}
            >
              <TableCell>
                <img src={IconMSG} alt="mensagem" width={20} />
              </TableCell>
              <TableCell>Marcelo Bueno</TableCell>
              <TableCell>Bem-Vinda</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const ContentMgs = () => {
    return (
      <div className="contentMgs">
        <button onClick={handleClose}>voltar</button>
        <div className="contentMgsHeader">
          <p>
            <strong>De:</strong> Marcelo Bueno ({LOGIN_MSN.email_marcelo})
          </p>
          <p>
            <strong>Para:</strong> Sabrina Kerpen ({LOGIN_MSN.email_sabrina})
          </p>
          <p>
            <strong>Assunto:</strong> Bem vindo
          </p>
        </div>
        <div className="contentMgsBody">
          <p>
            lorem lorem lo lorem lorem lorem lo lorem lorem lorem lo lorem lorem
            lorem lo lorem lorem lorem lo lorem lorem lorem lo lorem lorem lorem
            lo lorem lorem lorem lo lorem lorem lorem lo lorem lorem lorem lo
            lorem lorem lorem lo lorem
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="inbox">
      <div className="inboxMenu">
        <img src={inboxMenu} alt="Programs" />
      </div>
      <div className="inboxMensagens">
        <div className="inboxPastas">
          <img src={inboxMgs} alt="Programs" />
        </div>
        <div className="inboxEmails">
          {!!open ? <ContentMgs /> : <TableMgs />}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
