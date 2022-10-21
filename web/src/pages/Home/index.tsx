import Logo from "../../assets/logo.png";
import Perfil from "../../assets/perfil.jpg"
import * as C from "./styles";

import { AddEvent } from "../../components";
export const Home = () => {
  return (
    <C.HomeContainer>
      <C.Header>
        <img className="logo" src={Logo} alt="" />
        <nav>
            {/* <ul>
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>...</li>
            </ul> */}
        </nav>
        <section>
        <img className="perfil" src={Perfil} alt="" />
        </section>
      </C.Header>

      <C.Main> <AddEvent /></C.Main>

      {/* <C.Footer>...</C.Footer> */}
    </C.HomeContainer>
  );
};
