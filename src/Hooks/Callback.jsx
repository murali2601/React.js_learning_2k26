import React from 'react'
import {useState, useCallback, useEffect} from 'react'

export default function Callback()
{

    const [num, setNum] = useState('');
    const [btn, setBtn] = useState(false)

    const getItems = useCallback((multiply) => {
        return num * multiply;
    },[num]);

    useEffect(() => {
        console.log(`Number : ${getItems(5)} gets logged !`);
    },[getItems])

  

    return (
        <>
        <h1>useCallback() Hook</h1>
        <input type="text" className="border-2 rounded-full p-5 m-3" value={num} onChange={(e) => setNum(num => e.target.value)} />
        <h5>{num}</h5>
        <button 
        className = "bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 p-3 m-3 rounded-full animate-bounce"
        onClick={() => setBtn(!btn)}>
        {btn ? 'you clicked on me, revert it back' : 'Click me !'}
        </button>
        </>
    );
} 