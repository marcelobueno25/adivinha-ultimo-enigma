import React from "react";
import "./styles.scss";

const ErrorScreen = () => {
  return (
    <>
      <div className="error-screen">
        <div className="error-content">
          <img src="/img/msg_error.ico" alt="Error" className="error-icon" />
          <p>
            <span>Erro ao abrir o arquivo, log: </span>
            <br />
            hnh, ibpê znaqbh zhvgb orz zvaun qrgrgvir! ibpê pbafrthvh qrpvsene b
            póqvtb pbzb hzn ireqnqrven rkcreg. b póqvtb frpergb é: RZBERIVIRY.
            Hfr rffr póqvtb cnen qrfoybdhrne hzn fhecerfn rfcrpvny dhr cercnerv
            fó cnen ibpê.
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorScreen;
