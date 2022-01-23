import {Container} from "./styles"

import logo from "./Images/logo.png"
import {Button} from "../Assets/buttonSlide"

export const Header = () =>{
  return (
    <Container>
			<img src={logo} alt="Netflix"/>
      <Button>Entrar</Button>
    </Container>
  );
}
