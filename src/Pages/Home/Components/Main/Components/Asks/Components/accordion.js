import { useState } from "react";
import { Container } from "./style";

export const Accordion = ({ question, answer }) => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(Number(0));
  const setOpenQuestionHandle = () => {
    if (isOpenQuestion) {
      setIsOpenQuestion(false);
    } else {
      setIsOpenQuestion(true);
    }
  };

  return (
    <Container wasClicked={isOpenQuestion}>
      <button className="accordion" onClick={() => setOpenQuestionHandle()}>
        <h3>{question}</h3>
      </button>

      <div className="panel-container" style={{ zIndex: 1 }}>
        <div className="panel">
          <p>{answer}</p>
        </div>
      </div>
    </Container>
  );
};
