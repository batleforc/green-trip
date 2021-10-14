import React from "react";
import QuizzCard from "./home/QuizzCard";
import UpperCard from "./home/UpperCard";
import Card from "./main/Card";

const Home = () => {
  return (
    <div className="justify-center flex flex-col text-center">
      <h1>Home</h1>
      <div className="flex-col flex w-screen">
        <Card Content={UpperCard} />
        <Card Content={QuizzCard} />
      </div>
    </div>
  );
};

export default Home;
