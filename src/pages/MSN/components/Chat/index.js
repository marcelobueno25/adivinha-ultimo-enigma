import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "./styles.scss";

const Chat = () => {
  const [message, setMessage] = useState("");

  const MSG = [
    {
      user: "♥ 𝒮𝒶𝓈𝒶 𝑔𝒶𝓉𝒾𝓃𝒽𝒶 (っ◔◡◔)っ",
      msg: "Oi my Crush",
      enviado: 0,
    },
    {
      user: "♥ 𝒮𝒶𝓈𝒶 𝑔𝒶𝓉𝒾𝓃𝒽𝒶 (っ◔◡◔)っ",
      msg: "Me desculpe o sumico, essa semana foi tanto conturbada",
      enviado: 0,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "Oii Sasa",
      enviado: 1,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "Ja tava botando fe que vc iria me deixar no vacuo kkk",
      enviado: 1,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "Mas ja que chegou ate aqui, tenho uma surpresa pra vc",
      enviado: 1,
    },
    {
      user: "♥ 𝒮𝒶𝓈𝒶 𝑔𝒶𝓉𝒾𝓃𝒽𝒶 (っ◔◡◔)っ",
      msg: "Fala homennnnn",
      enviado: 0,
    },
    {
      user: "™ мααн ∂αяк ™",
      msg: "So vou dizer uma coisa, [ Jubileu Jubileia ]",
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
              <h5>Biscoito Gostoso</h5>
              <p>
                Minha Gata Linda {"  "}
                <small>&lt;biscotinhogostoso@msn.com.br&gt;</small>
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
              src="/img/msn/userDefault.png"
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
              src="/img/msn/userDefault.png"
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
