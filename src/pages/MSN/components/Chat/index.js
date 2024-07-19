import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { LOGIN_MSN } from "../../../../util/db";
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
      msg: "Só vou te dar uma pista... [-23.653291304229484, -46.711689843988154]",
      enviado: 1,
    },
  ];

  return (
    <div className="msn-chat">
      <Grid className="msn-chat-header" container>
        <Grid item xs={12}>
          <div className="msn-contact-info">
            <img
              src="/img/iconUser2.ico"
              alt="User"
              className="contact-avatar"
            />
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
            <img src="/img/msn/add.png" alt="Adicionar" />
            <img src="/img/msn/contacts.png" alt="Contato" />
            <img src="/img/msn/call.png" alt="Chamada" />
            <img src="/img/msn/midia.png" alt="Midia" />
            <img src="/img/msn/games.png" alt="Jogos" />
            <img src="/img/msn/block.png" alt="Bloquear" />
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
            <img
              className="chatAvatarImg"
              src="/img/fotos/ma3.png"
              alt="user default"
            />
            <img
              className="chatAvatarBorder"
              src="/img/msn/borderUser.png"
              alt="borda"
            />
          </div>
          <div className="bottomavatar">
            <img
              className="chatAvatarImg"
              src="/img/fotos/sa2.png"
              alt="user default"
            />
            <img
              className="chatAvatarBorder"
              src="/img/msn/borderUser.png"
              alt="borda"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
