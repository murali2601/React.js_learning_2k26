import React from "react";
import { createContext } from "react";
import Home from "../Components/Home.jsx";

function ThemedContext() {
  const ThemedContext = createContext();

//   const [name] = useState('light');
const name = 'Murali';
  

  return (
    <div>
      <ThemedContext.Provider value={name}>
        <Home/>
      </ThemedContext.Provider>
    </div>
  );
}

export default ThemedContext;
