import React, { useEffect, useState } from "react";
import QuizzItem from "./Quizz/QuizzItem";
import { Ask } from "../../data";

const QuizzCard = ({ title, Content }) => {
  const [goodAnswer, setGoodAnswer] = useState([]);
  const [questionID, setQuestionId] = useState(0);
  useEffect(() => {
    changeAsk();
    // eslint-disable-next-line
  }, []);
  var changeAsk = (qID) => {
    var tab = [].concat(goodAnswer);
    if (qID !== undefined) {
      setGoodAnswer(goodAnswer.concat([qID]));
      tab.push(qID);
    }
    var questionId;
    do {
      questionId = Math.floor(Math.random() * Ask.length);
      if (
        tab.includes(questionId) &&
        goodAnswer.length === 2 &&
        Ask.length === 3
      )
        questionId = -1;
    } while (tab.includes(questionId));
    setQuestionId(questionId);
  };
  return (
    <div>
      {questionID !== -1 && (
        <div>
          <p>
            {Ask[questionID].Question} ({goodAnswer.length + 1}/3)
          </p>
          <div className="flex flex-wrap flexBasisQuizz justify-center m-3 ">
            {Ask[questionID].answer.map(({ text, id }, index) => (
              <QuizzItem
                onClick={() => {
                  if (id === Ask[questionID].goodAnswer) {
                    changeAsk(questionID);
                  }
                }}
                key={index}
                text={text}
              />
            ))}
          </div>
        </div>
      )}
      {questionID === -1 && (
        <div>
          {goodAnswer.map((superID, index) => (
            <div key={superID}>
              <p>
                {Ask[superID].Question} ({index + 1}/3)
              </p>
              <div className="flex flex-wrap flexBasisQuizz justify-center m-3 ">
                {Ask[superID].answer.map(({ text, id }, index) => (
                  <QuizzItem
                    key={index}
                    text={text}
                    className={
                      id === Ask[superID].goodAnswer ? "bg-green-700	" : ""
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizzCard;
