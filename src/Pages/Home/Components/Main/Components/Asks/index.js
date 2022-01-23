import {Box} from "./Components/box.js"
import { Container } from "./styles";

export const Asks = () => {

	return(
		<Container>
			<h4>Perguntas frequentes</h4>
			<div className="boxes">
				<Box
					question="O que é Netflix ?"
					answer="um site pra ver séries."
					id={1}
				/>

				<Box
					question="Quanto custa Netflix ?"
					answer="um site pra ver séries."
					id={2}
				/>

				<Box
					question="Como faço para cancelar ?"
					answer="um site pra ver séries."
					id={3}
				/>
			</div>
		</Container>
	);
}