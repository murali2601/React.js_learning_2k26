import React, { Component } from "react";
import { useState } from "react";
import { Data } from "../Data.jsx";

const State = () => {
  const [count, setCount] = useState(1);

  const [index, setIndex] = useState(0);

  const [pending, setPending] = useState(0);

  const [completed, setCompleted] = useState(0);

  const time = new Date().toLocaleTimeString();

  async function handleCart() {
    setPending(pending => pending + 1);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
  }


  function handleClickNext() {
    if (index < Data.length - 1)  setIndex(index + 1);
  }
  function handleClickPrev() {
    if (index > 0) setIndex(index - 1);
  }

  let updateData = Data[index];

  return (
    <div>
      <h1><b>This is State Component</b></h1>
      <button onClick={() => setCount(count + 1)} className="m-3 p-5 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 cursor-pointer text-white rounded">{count}</button>
      <p>
        ---------------------------------------------------------------------------------------------
      </p>
      <h2>
        {updateData.name} by {updateData.artist}
      </h2>
      <br />
      <h3>
        ({index + 1} of {Data.length})
      </h3>
      <img src={updateData.url} alt={updateData.alt} />
      <p>{updateData.description}</p>
      <button
        onClick={handleClickPrev}
        className="m-3 p-3 bg-blue-500 text-white rounded"
      >
        Previous
      </button>
      <button
        onClick={handleClickNext}
        className="m-3 p-3 bg-blue-500 text-white rounded"
      >
        Next
      </button>
      <h1>{ time }</h1>

      <br />
      <br />

        <button
          onClick={handleCart}
          className="m-3 p-3 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white rounded cursor-pointer"
        >
          Pending: {pending}
        </button>
        <h6
        className="m-3 p-3 bg-green-500 text-white rounded"
        >
            Completed : {completed}
        </h6>

    </div>
  );
};

export default State;
