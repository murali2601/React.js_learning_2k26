import React, { Component } from "react";

const Cards = (props) => {
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
    <p>Hallo {props.name} ! Sie sind {props.age} Jahre alt.</p>
  </div>;
};

export default Cards;
