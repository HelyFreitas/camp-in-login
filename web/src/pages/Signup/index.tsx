import "./signupstyles.scss"
import logo from "../../assets/logo.png";
import { EyeSlash, Eye, SignIn, Envelope, LockSimple } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [state, setstate] = useState(false);
  const [state1, setstate1] = useState(false);

  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  const toggleBtn1 = () => {
    setstate1((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="backimage" />
      <div className="content">
        <img className="img" src={logo} alt="" />
        {/*/////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <div className="content-container">
          <header className="title">
            <section className="header-title">
              <SignIn size={30} color="#FFC632" />
              <h1>Cadastre-se</h1>
            </section>
            <p>Faça seu cadastro com suas informações pessoais</p>
          </header>
          <form method="POST" autoComplete="off">
            <section className="input-email">
              <label id="label" htmlFor="email" className="label-input-email">
                E-mail:
              </label>
              <div className="inputs-icon-email">
                <Envelope className="envelope" size={20} color="#868686" />
                <input
                  id="email"
                  className="email-input"
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </section>
            <section className="input-pass">
              <label htmlFor="pass" className="label-input-pass">
                Senha:
              </label>
              <div className="inputs-icon-pass">
                <LockSimple className="locksimple" size={20} color="#868686" />
                <input
                  className="pass-input"
                  type={state ? "text" : "password"}
                  id="pass"
                  placeholder="Crie uma senha"
                />
                <div className="btnbtn">
                  <button type="button" className="btn" onClick={toggleBtn}>
                    {state ? (
                      <Eye size={20} color="#AFB6C2" className="icon" />
                    ) : (
                      <EyeSlash size={20} color="#AFB6C2" className="icon2" />
                    )}
                  </button>
                </div>
              </div>
              <label htmlFor="pass" className="label-input-pass">
                Confirmar a senha:
              </label>
              <div className="inputs-icon-pass">
                <LockSimple className="locksimple" size={20} color="#868686" />
                <input
                  className="pass-input"
                  type={state1 ? "text" : "password"}
                  id="pass"
                  placeholder="Confirme sua senha"
                />
                <div className="btnbtn">
                  <button type="button" className="btn" onClick={toggleBtn1}>
                    {state1 ? (
                      <Eye size={20} color="#AFB6C2" className="icon" />
                    ) : (
                      <EyeSlash size={20} color="#AFB6C2" className="icon2" />
                    )}
                  </button>
                </div>
              </div>
            </section>
          </form>
          {/* <div className="forgotPassword">
            <div className="remember-me">
              <input type="checkbox" id="check" placeholder="Lembre-me" />
              <label htmlFor="check" className="checkbox-label">
                <p>Lembre-me</p>
              </label>
            </div>
            <a href="">Esqueci minha senha</a>
          </div> */}
          <button type="submit" className="send-btn">
            ENTRAR
          </button>
          <footer className="footer">
            <p>Já tem uma conta?</p>
            <Link to="/">Entrar</Link>
          </footer>
        </div>
        {/*/////////////////////////////////////////////////////////////////////////////////////////////////*/}
      </div>
    </div>
  );
};
