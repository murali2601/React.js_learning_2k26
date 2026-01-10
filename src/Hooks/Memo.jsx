import React from 'react'
import { useState, useMemo, useRef  } from 'react'

const Memo = ({Animate}) => {

    const [number,setNumber] = useState(0);
    const [dark, setDark] = useState(false);

                                                                                 
    const doubleNumber = useMemo(() => {
         return slowFunction(number)
    }, [number]);

    const themeStyles = {
        backgroundColor : dark ? 'black' : 'white',
        color : dark ? 'white' : 'black',
        transition : 'all 0.5s ease',
        border : '2px solid',
        borderRadius : '15px'
    }

  

    return (
        <>
        <div style={themeStyles} className="p-5 m-5 border-2 rounded shadow-lg">
        <h1>This is Memo Hook Page</h1>
        <input type="text" className="border border-black m-2 p-2" 
         onChange={e => setNumber(e.target.value)}/>
         <h5>{doubleNumber}</h5>

            <button ref={Animate} onClick={() =>{ setDark(prevDark => !prevDark); Animate.current = true;}}
             className={` p-2 m-2 rounded ${dark ? 'bg-white text-black' : 'bg-black text-white'} transition-all duration-500 
             ${Animate.current ? '' : 'animate-pulse'}
             `}>
                {dark ? 'Light Theme' : 'Dark Theme'}</button>
                <p></p>
        </div>
        </>

    
        
    )
}

function slowFunction(num) {
    console.log("Calling Slow Function");
    for(let i=0; i<=1000; i++) {
        console.log(i);
    }
    return num * 2;
}
export default Memo;