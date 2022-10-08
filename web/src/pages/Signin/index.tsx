import "./styles.scss";
import logo from "../../assets/logo.png";
import { EyeSlash, Eye, SignIn, Envelope, LockSimple } from "phosphor-react";
import { useState } from "react";

export const Signin = () => {
  const [state, setstate] = useState(false);

  const toggleBtn = () => {
    setstate(prevState => !prevState);
  };

  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="" />
        {/*/////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <div className="content-container">
          <header className="title">
            <section className="header-title">
              <SignIn size={30} color="#FFC632" />
              <h1>Faça seu login</h1>
            </section>
            <p>Entre com suas informações de cadastro</p>
          </header>
          <form method="POST" autoComplete="off">
            <p>E-mail:</p>
            <label id="label" htmlFor="email" className="label-input-email">
              <Envelope className="envelope" size={20} color="#868686" />
              <input
                id="email"
                className="email-input"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </label>
            <p>Senha:</p>
            <label htmlFor="pass" className="label-input-password">
              <LockSimple className="locksimple" size={20} color="#868686" />
              <input
                className="pass-input"
                type={state ? "text" : "password"}
                id="pass"
                placeholder="Digite sua senha"
              />
              <div className="btnbtn">
                <button type="button" className="btn" onClick={toggleBtn}>
                  {state
                    ? <Eye size={20} color="#AFB6C2" className="icon" />
                    : <EyeSlash size={20} color="#AFB6C2" className="icon2" />}
                </button>
              </div>
            </label>
          </form>
          <div className="forgotPassword">
            <div className="remember-me">
              <input type="checkbox" id="check" placeholder="Lembre-me" />
              <label htmlFor="check" className="checkbox-label">
                <p>Lembre-me</p>
              </label>
            </div>
            <a href="">Esqueci minha senha</a>
          </div>
          <button type="submit" className="send-btn">
            ENTRAR
          </button>
          <footer className="footer">
            <p>Não tem um conta?</p>
            <a href="">Registre-se</a>
          </footer>
        </div>
        {/*/////////////////////////////////////////////////////////////////////////////////////////////////*/}
      </div>
      <div className="backimage" />
    </div>
  );
};
