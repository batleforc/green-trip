import React from "react";

const QuizzItem = ({ text, onClick = () => console.log("JOJO") }) => {
  return (
    <p onClick={onClick} className="w-2/5 m-1 bg-gray-300 rounded-md">
      {text}
    </p>
  );
};

export default QuizzItem;
