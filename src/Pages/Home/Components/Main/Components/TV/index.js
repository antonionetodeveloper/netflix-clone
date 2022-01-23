import { Container } from "./styles";

export const Tv = () => {
	return(
		<Container>
			<div className="text">
				<h3>Aproveite na TV.</h3>
				<p>Assista em Smart TVs, PlayStation, 
					Xbox, Chromecast, Apple TV, aparelhos 
					de Blu-ray e outros dispositivos.
				</p>
			</div>
			<img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} alt="Tv"/>
		</Container>
	);
}