import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { LOGIN_MSN } from "../../../../util/db";
import iconUser2 from "../../../../assets/icons/iconUser2.ico";
import borderUsericon from "../../../../assets/icons/borderUser.png";
import addcicon from "../../../../assets/icons/add.png";
import contactsicon from "../../../../assets/icons/contacts.png";
import callicon from "../../../../assets/icons/call.png";
import midiaicon from "../../../../assets/icons/midia.png";
import gamesicon from "../../../../assets/icons/games.png";
import blockicon from "../../../../assets/icons/block.png";
import ma3 from "../../../../assets/photos/ma3.png";
import sa2 from "../../../../assets/photos/sa2.png";
import "./styles.scss";

const Chat = () => {
  const [message, setMessage] = useState("");

  const MSG = [
    {
      user: "♥ 𝒮𝒶𝓈𝒶 𝑔𝒶𝓉𝒾𝓃𝒽𝒶 (っ◔◡◔)っ",
      msg: "Oi, my Crush! 🌟",
      enviado: 0,
    },
    {
      user: "♥ 𝒮𝒶𝓈𝒶 𝑔𝒶𝓉𝒾𝓃𝒽𝒶 (っ◔◡◔)っ",
      msg: "Desculpa o sumiço, essa semana foi uma loucura total! 😵",
      enviado: 0,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "Oie, Sasa! ",
      enviado: 1,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "Tava achando que você ia me deixar falando sozinho, hein!? 😂",
      enviado: 1,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "Mas já que apareceu, prepare-se... tenho um secreto para vc!",
      enviado: 1,
    },
    {
      user: "♥ 𝒮𝒶𝓈𝒶 𝑔𝒶𝓉𝒾𝓃𝒽𝒶 (っ◔◡◔)っ",
      msg: "Ai, fala logo, homem! Tô curiosa aqui! 😆",
      enviado: 0,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "Só vou te dar uma pista... [-23.666002294931218, -46.8039530925205]",
      enviado: 1,
    },
  ];

  return (
    <div className="msn-chat">
      <Grid className="msn-chat-header" container>
        <Grid item xs={12}>
          <div className="msn-contact-info">
            <img src={iconUser2} alt="User" className="contact-avatar" />
            <div>
              <h5>{LOGIN_MSN.name_msn}</h5>
              <p>
                Nas sombras, encontrei meu lugar {"  "}
                <small>&lt;{LOGIN_MSN.email_marcelo}&gt;</small>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="msn-chat-config">
            <img src={addcicon} alt="Adicionar" />
            <img src={contactsicon} alt="Contato" />
            <img src={callicon} alt="Chamada" />
            <img src={midiaicon} alt="Midia" />
            <img src={gamesicon} alt="Jogos" />
            <img src={blockicon} alt="Bloquear" />
          </div>
        </Grid>
      </Grid>
      <div className="msn-chat-content">
        <div className="msn-chat-content-messages">
          <div className="recieve">
            {MSG.map((e, index) => {
              return (
                <div
                  className={`msg enviado ${
                    e.enviado ? "recebido" : "enviado"
                  }`}
                >
                  <p>
                    <span>{e.user}: </span>
                    <br />
                    {e.msg}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="send">
            <textarea
              type="text"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="msn-chat-content-avatars">
          <div className="topavatar">
            <img className="chatAvatarImg" src={ma3} alt="Foto Marcelo" />
            <img
              className="chatAvatarBorder"
              src={borderUsericon}
              alt="bordar"
            />
          </div>
          <div className="bottomavatar">
            <img className="chatAvatarImg" src={sa2} alt="Foto Sabrina" />
            <img
              className="chatAvatarBorder"
              src={borderUsericon}
              alt="bordar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
