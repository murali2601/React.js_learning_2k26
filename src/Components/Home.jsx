import React from 'react'
import Cards from './Props.jsx'
import State from './State.jsx'
import Immer from './Immer.jsx'
import Array from './Array.jsx'
import Input from '../Managing_State/Input.jsx'
import { useState } from 'react'

const Button = () => {

   

    return (
        <button className="bg-blue-400 
        hover:bg-blue-300
        active:bg-blue-500
        p-2 rounded-full
        text-white">Click Me</button>
    )
}


const Home = () => {

     const [page, setPage] = useState("state");
    
    return(
        <>
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
        <button onClick={ () => setPage("state") } className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer">State</button>
        <button onClick={ () => setPage("immer") } className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer">Immer</button>
        <button onClick={ () => setPage("array") } className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer">Array</button>    
        <button onClick={ () => setPage("input") } className="m-3 p-3 bg-green-500 text-white rounded cursor-pointer">Input</button>    
        </nav>

        {page === "state" && <State />}
        {page === "immer" && <Immer />}
        {page === "array" && <Array />}
        {page === "input" && <Input />}

        </>
    )
}

export default Home;