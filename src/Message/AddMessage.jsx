import { useState } from "react";

const AddMessage = () => {
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/.netlify/functions/saveMessage", {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="border p-2"
        placeholder="Enter message"
      />
      <button className="ml-2 bg-blue-500 text-white p-2">
        Save
      </button>
    </form>
  );
};

export default AddMessage;
