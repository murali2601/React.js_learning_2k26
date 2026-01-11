import React from "react";
import Cards from "./Props.jsx";
import State from "./State.jsx";
import Immer from "./Immer.jsx";
import Array from "./Array.jsx";
import Input from "../Managing_State/Input.jsx";
// import Form_Status from '../Hooks/Form_Status.jsx'
import Effect from "../Hooks/Effect.jsx";
import Ref from "../Hooks/Ref.jsx";
import Memo from "../Hooks/Memo.jsx";
import Reducer from "../Hooks/Reducer.jsx"
import { ThemeContext } from "../App.jsx";

// import AddMessage from '../Message/AddMessage.jsx'
// import Message from '../Message/Message.jsx'

import { useState, useContext, useRef } from "react";



const Button = () => {
  return (
    <button
      className="bg-blue-400 
        hover:bg-blue-300
        active:bg-blue-500
        p-2 rounded-full
        text-white"
    >
      Click Me
    </button>
  );
};

const Home = () => {
  const [page, setPage] = useState("state");
  let Animate = useRef(false);
const themeStyles = useContext(ThemeContext);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">This is the Home Page</h1>

        <Button />
        <h1>Props</h1>
        <Cards name="John" age={30} />
        <Cards name="Jane" age={25} />
        <Cards name="Bob" age={35} />
        <br />
        {/* <State />
        <br />
        <Immer />
        <p>-----------------------------------------</p>
        <Array /> */}

        <nav>
          <button style={themeStyles.btn}
            onClick={() => setPage("state")}
            className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
          >
            State
          </button>
          <button style={themeStyles.btn}
            onClick={() => setPage("immer")}
            className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
          >
            Immer
          </button>
          <button style={themeStyles.btn}
            onClick={() => setPage("array")}
            className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
          >
            Array
          </button>
          <button style={themeStyles.btn}
            onClick={() => setPage("input")}
            className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
          >
            Input
          </button>
        </nav>

        <ThemeContext.Provider value={themeStyles}>
          {page === "state" && <State />}
          {page === "immer" && <Immer />}
          {page === "array" && <Array />}
          {page === "input" && <Input />}

          <nav className="m-5 p-5 border-t-2 border-b-2">
            {/* <button onClick={ () => setPage("Form_Status") } className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer">Form Status</button>     */}
            <button
              onClick={() => setPage("Effect")}
              className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
            >
              Effect
            </button>
            <button
              onClick={() => setPage("Ref")}
              className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
            >
              Ref
            </button>
            <button
              onClick={() => setPage("Memo")}
              className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
            >
              Memo
            </button>
            <button
              onClick={() => setPage("Reducer")}
              className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer"
            >
              Reducer
            </button>
            {page === "Memo" && <Memo Animate={Animate} />}
            {/* {page === "Form_Status" && <Form_Status />} */}
            {page === "Effect" && <Effect />}
            {page === "Ref" && <Ref />}
            {page === "Reducer" && <Reducer />}

          </nav>
        </ThemeContext.Provider>
        {/* <AddMessage />
        <Message /> */}
      </div>
    </>
  );
};

export default Home;
