import React from 'react'
import { useState } from 'react'

const Input = () => {

    const [answer, setAnswer] = useState("");
    const [err, setErr] = useState("");
    const [status, setStatus] = useState("typing");

    const handleAnswer = (e) => {
        setAnswer(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            await submitForm(answer);
            setStatus("success");
            setErr(answer)
        } catch (error) {
            setStatus("error");
            setErr(error);
        }
    }

    return (
        <>
        <lable>When did Tipu Sultan died : </lable>
        <form onSubmit={handleSubmit}>
        <input type="text"
        value={answer}
        onChange={handleAnswer}
        className="border border-gray-300 rounded px-2 py-1"  />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        } className="ml-2 bg-blue-500 cursor-pointer text-white px-4 py-2 rounded">
          Submit
        </button>
       { err !== null && status === "error" && <p className="text-red-500 mt-2">{err.message}</p> }
       { status === "success" && <p className="text-green-500 mt-2">{answer} is the Correct Answer!</p> }
        </form>
        </>
    )
}

const submitForm = (ans) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ans.toLowerCase() === "last war")
            {
                resolve();
            }
            else{
                reject(new Error("Wrong Answer"));
            }},1000)
    });
}

export default Input;