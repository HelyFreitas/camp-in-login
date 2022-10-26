import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import { Envelope } from "phosphor-react";

export const ForgotPass = () => {
  return (
    <Container>
      <Content>
        <h1>Recuperação de senha!</h1>
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
            <button type="submit" className="sendBtn">
            ENVIAR
          </button>
            <Link className="linkBack" to="/">Voltar</Link>
      </Content>
    </Container>
  );
};
