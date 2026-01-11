import { useState,useEffect, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home.jsx";
// import { ThemeContext } from './Components/Home.jsx'

export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  const themeStyles = {
    backgroundColor: dark ? "	#2d2d30" : "white",
    color: dark ? "white" : "#2d2d30",
    transition: "all 0.5s ease",
  };

  const Border = {
    border: dark ? "2px solid white" : "2px solid black",
    borderRadius: "30px",
  }

  const btn = {
    backgroundColor: dark ? "white" : "#2d2d30",
    color: dark ? "#2d2d30" : "white",
    transition: "all 0.5s ease",
    borderRadius: "20px 20px",
  }

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  },[dark]);

  return (
    <>
      <div style={themeStyles}>
        <ThemeContext.Provider value={{themeStyles, Border, btn}}>
          <button
            className={`m-5 p-5 ${dark ? 'bg-white text-black' : 'bg-gray-800 text-white'} cursor-pointer p-2 rounded-full transition-all duration-500`}
            onClick={() => setDark(!dark)}
          >
          Switch to {dark ? 'Light Theme' : 'Dark Theme'}
          </button>
          <Home />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
