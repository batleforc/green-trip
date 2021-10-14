import React from "react";
import { AiFillCar, AiFillCloud } from "react-icons/ai";

const UpperCard = () => {
  return (
    <div>
      <p>Hier</p>

      <div className="flex justify-center flex-col">
        <div className="w-50 h-6 animate-pulse bg-gray-600 rounded-md mx-4 my-1"></div>
        <div className="w-50 h-6 animate-pulse bg-gray-600 rounded-md mx-4 my-1"></div>
        <div className="w-50 h-6 animate-pulse bg-gray-600 rounded-md mx-4 my-1"></div>
        <div className="w-50 h-6 animate-pulse bg-gray-600 rounded-md mx-4 my-1"></div>
        <div className="w-50 h-6 animate-pulse bg-gray-600 rounded-md mx-4 my-1"></div>
      </div>
      <div>
        <div className="flex justify-center align-middle">
          <AiFillCloud />
          Consommation:{" "}
          <div className="w-8 animate-pulse bg-gray-600 rounded-md mx-1"></div>
        </div>
        <div className="flex justify-center align-middle">
          <AiFillCar /> Mode de transport:{" "}
          <div className="w-8 animate-pulse bg-gray-600 rounded-md mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default UpperCard;
