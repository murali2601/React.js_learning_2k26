import React from "react";
import { useReducer } from "react";

const ACTIONS = {
    INCREMENT : 'increment',
    DECREMENT : 'decrement'
}

const number = 2;


function reducer(state, action) {
    switch(action.type)
    {
        case ACTIONS.INCREMENT : 
            return { count : state.count + number };
        case ACTIONS.DECREMENT : 
            return { count : state.count - number };
        default : 
            return state;
    }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

function handleCount(type)
{
    dispatch({type, payload : {num : number}})
}

  return (
    <>
      <h1>Reducer Usage</h1>
      <button onClick={() => handleCount(ACTIONS.DECREMENT)} className="btn bg-blue-500 m-5 p-5 rounded-full hover:bg-blue-600 active:bg-blue-800 cursor-pointer">
        -
      </button>
      {state.count}
      <button onClick={() => handleCount(ACTIONS.INCREMENT)} className="btn bg-blue-500 m-5 p-5 rounded-full hover:bg-blue-600 active:bg-blue-800 cursor-pointer">
        +
      </button>
    </>
  );
};

export default Reducer;
