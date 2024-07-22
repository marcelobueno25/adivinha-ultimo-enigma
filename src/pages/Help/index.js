import React from "react";
import "./styles.scss";

const Help = () => {
  return (
    <div className="help">
      <div className="helpContent">
        <h1>Bem-vinda ao WinLove 95!</h1>
        <p>
          Antes de você entrar nesse mundo retrô, tem algumas coisinhas que você
          precisa saber. Prepare-se para uma viagem no tempo direto para os anos
          90!
        </p>
        <p>
          <strong>Como Funciona:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Exploração:</strong> Esse projeto é inspirado no Windows
              95, então você vai ver ícones e pastas que trazem um toque de
              nostalgia.
            </p>
          </li>
          <li>
            <p>
              <strong>Enigmas e Surpresas:</strong> Tem alguns segredinhos e
              enigmas escondidos por aqui. Resolva-os e descubra pequenas
              surpresas que preparei para você. 😉
            </p>
          </li>
          <li>
            <p>
              <strong>Dicas:</strong> Se ficar perdida, procure as dicas
              escondidas nos arquivos e pastas. O menu iniciar é apenas estético
              e não possui funcionalidade.
            </p>
          </li>
        </ul>

        <p>
          <strong>Antes de Começar:</strong>
        </p>
        <ul>
          <li>
            <p>Clique nos ícones, abra as pastas e explore cada cantinho.</p>
          </li>
          <li>
            <p>Não tenha pressa. A diversão está em descobrir cada detalhe.</p>
          </li>
        </ul>
        <p>
          Sempre que precisar ler este manual novamente, é só clicar no ícone de
          ajuda no desktop.
        </p>
        <p>
          Pronta para começar? Clique no <strong>x</strong> e deixe a nostalgia
          tomar conta!
        </p>
      </div>
    </div>
  );
};

export default Help;
