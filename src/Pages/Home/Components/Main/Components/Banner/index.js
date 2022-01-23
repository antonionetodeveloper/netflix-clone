import { Container } from "./styles";
import { Button } from "../../../Assets/buttonFloat";

export const Banner = () => {
	return(
		<Container>
			<div className="text">
        <div className="title">
          <h1>Filmes, séries e muito mais.<br/>Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
        </div>
        <h3 className="subtitle">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
      </div>
      <form>
        <input
        type="email"
        name="email"
        placeholder="Email"
        />
        <Button>Vamos lá</Button>
      </form>
		</Container>
	);
}