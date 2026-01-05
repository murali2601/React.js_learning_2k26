import React, { Component } from "react";

const Cards = (props) => {
    const {name , age} = props; //here we are destructuring props object
    const currentYear = new Date().getFullYear();
  return <div className="
  flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4
  sm:py-4
  border-2 border-gray-300
  p-4
  rounded-lg
  shadow-lg
  m-2
  text-lg
">
    <p>Hallo {name} ! Sie sind {age} Jahre alt.</p>
    
    <p>Fur Ihere info, Das Jahre ist {currentYear}.</p>
  </div>;
};

export default Cards;
