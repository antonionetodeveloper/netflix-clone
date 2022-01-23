import { useEffect, useState } from "react";
import { Container } from "./style";

export const Box = ({question, answer, id}) => {
	
	const [quest, setQuest] = useState(Number(0))
	const setQuestionHandle = (questionID) =>{
		setQuest(questionID)
	}
	useEffect(() => {
		console.log(quest)
	})

	return(
		<Container onClick={() => setQuestionHandle(id)}>
			<p>{question}</p>
			<div className="answer">
				<p>{answer}</p>
			</div>
		</Container>
	);
}