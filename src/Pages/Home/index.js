import {Container} from "./styles.js"

import {Header} from "./Components/Header/"
import {Main} from "./Components/Main/"
import {Footer} from "./Components/Footer/"

export const Home = () =>{
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}
