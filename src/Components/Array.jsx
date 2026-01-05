import React, { Component } from "react";
import { useState } from "react";

let nextID = 0;
const Array = () => {
  const [name, setName] = useState("");
  const [arr, setArr] = useState([]);

  return (
    <>
      <h1>
        <strong>Array Component</strong>
      </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName((name) => e.target.value)}
        className="border border-gray-300 m-5 rounded px-4 py-2"
      />

      <button
        onClick={() => {
          setArr((arr) => [...arr, { id: nextID++, name: name }]);
        }}
        className="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 p-2 rounded-full text-white"
      >
        Add
      </button>
      <ul>
        {arr.map((item) => {
          return (
            <li key={item.id} className="m-3 p-2">
              {item.name}
              <button
                onClick={() => {
                  setArr((arr) => arr.filter((a) => a.id !== item.id));
                }}
                className="ml-4 bg-red-400 hover:bg-red-300 active:bg-red-500 p-2 rounded-full text-white"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Array;
