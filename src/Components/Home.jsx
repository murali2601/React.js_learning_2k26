import React from 'react'
import Cards from './Props.jsx'
import State from './State.jsx'

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

    
    
    return(
        <>
        <h1 className="text-3xl font-bold">This is the Home Page</h1>
        <Button />
        <h1>Props</h1>
        <Cards name="John" age={30} />
        <Cards name="Jane" age={25} />
        <Cards name="Bob" age={35} />
        <br />
        <State />
        
        </>
    )
}

export default Home;