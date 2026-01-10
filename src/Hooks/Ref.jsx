import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Ref = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        if(count > 5)  renderCount.current += 1;
    }, [count])

    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <>
        <h1>Using ref Hooks</h1>
        <button
        className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-900 cursor-pointer"
         onClick={() => {
            setCount(count => count + 1);
        }}>{count}</button>
        <h2>Render count : {renderCount.current}</h2>

        <hr></hr>

        <input ref={inputRef} type="text" placeholder="Enter your name" className="border-2 p-2 rounded" />
        <button
        className="m-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 active:bg-green-900 cursor-pointer"
         onClick={{handleFocus}
        }>Greet</button>
        </>
    )
}

export default Ref;