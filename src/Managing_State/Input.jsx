import React from "react";
import { useState } from "react";

const Input = () => {
  const [answer, setAnswer] = useState("");
  const [err, setErr] = useState("");
  const [status, setStatus] = useState("typing");
  const [btn, setBtn] = useState("Submit");

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setBtn("Submitting...");
    try {
      await submitForm(answer);
      setStatus("success");
      setBtn("Submitted");
      setErr(answer);
    } catch (error) {
      setStatus("error");
      setBtn("Submit Again");
      setErr(error);
    }
    // setBtn("Submits");
  }

  return (
    <>
      <lable>When did Tipu Sultan died : </lable>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={handleAnswer}
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          className={`ml-2 
            ${btn === "Submit" ? " px-4 py-2 rounded bg-blue-500 text-white cursor-not-allowed" : "bg-blue-500 cursor-pointer text-white px-4 py-2 rounded transition-colors hover:bg-blue-700 active:bg-blue-900 "} 
            ${btn === "Submitted" ? " px-4 py-2 rounded bg-green-500 text-white cursor-not-allowed" : "bg-blue-500 cursor-pointer text-white px-4 py-2 rounded transition-colors hover:bg-green-700 active:bg-green-900 "} 
            ${btn === "Submit Again" ? " px-4 py-2 rounded bg-red-500 text-white cursor-not-allowed" : "bg-blue-500 cursor-pointer text-white px-4 py-2 rounded transition-colors hover:bg-red-700 active:bg-red-900 "} 
            disabled:bg-gray-400 disabled:cursor-not-allowed`}
          type="submit"
        >
          {btn}
        </button>
        {err !== null && status === "error" && (
          <p className="text-red-500 mt-2">{err.message}</p>
        )}
        {status === "success" && (
          <p className="text-green-500 mt-2">{answer} is the Correct Answer!</p>
        )}
      </form>
    </>
  );
};

const submitForm = (ans) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ans.toLowerCase() === "last war") {
        resolve();
      } else {
        reject(new Error("Wrong Answer"));
      }
    }, 1500);
  });
};

export default Input;
