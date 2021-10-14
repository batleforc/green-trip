import React from "react";

const Card = ({ title, Content }) => {
  return (
    <div className="rounded-md shadow-2xl bg-gray-500 m-4">
      {title ? <p>{title}</p> : <></>}
      {Content ? <Content /> : <></>}
    </div>
  );
};

export default Card;
