import {Banner} from "./Components/Banner/"
import {Tv} from "./Components/TV/"
import { AnyWhere } from "./Components/AnyWhere";
import { Asks } from "./Components/Asks/index";

import {Container} from "./styles"

export const Main = () =>{
  return (
    <Container>
			<Banner/>
      <Tv/>
      <AnyWhere/>
      <Asks/>
    </Container>
  );
}
