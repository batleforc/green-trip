import React from "react";
import QuizzItem from "./Quizz/QuizzItem";

const QuizzCard = ({ title, Content }) => {
  return (
    <div>
      <p>A votre avis 42 ?</p>
      <div className="flex flex-wrap flexBasisQuizz justify-center m-3 ">
        <QuizzItem text="Test1" />
        <QuizzItem text="Test1" />
        <QuizzItem text="Test1" />
      </div>
    </div>
  );
};

export default QuizzCard;
