import Logo from "../../assets/logo.png";
import Perfil from "../../assets/perfil.jpg";
import * as C from "./styles";

export const Home = () => {
  return (
    <C.HomeContainer>
      <C.Header>
        <img className="logo" src={Logo} alt="" />
        <section>
          <img className="perfil" src={Perfil} alt="" />
        </section>
      </C.Header>

      <C.Main>
        <h1>Agende suas tarefas aqui</h1>
      </C.Main>

      <C.Footer />
    </C.HomeContainer>
  );
};
