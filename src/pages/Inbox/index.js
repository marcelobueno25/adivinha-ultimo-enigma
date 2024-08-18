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
              <TableCell>Seu Amor</TableCell>
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
            <strong>Assunto:</strong> Seu Amor
          </p>
        </div>
        <div className="contentMgsBody">
          <p>Oi, paixão!</p>
          <p>
            Quero te dizer o quanto você significa para mim. Desde que nos
            conhecemos, cada momento ao seu lado tem sido como uma página de um
            diário dos anos 90, cheio de momentos inesquecíveis e felizes.
            <br />
            A cada dia que passa, fico mais encantado com você. Adoro como rimos
            juntos, como conversamos sobre tudo e nada, e como nossos corações
            estão sempre em sintonia.
            <br />
            Você, paixão, é a luz dos meus dias e a melodia das minhas noites.
            Obrigado por ser quem você é e por compartilhar sua vida comigo.
          </p>
          <p>Te amo muito!</p>
          <p>
            Com carinho, <br />
            Marcelo Bueno
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
