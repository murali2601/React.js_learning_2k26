import React from "react";
import { useEffect, useState, useContext } from "react";
import {ThemeContext} from "../App.jsx";

// let id = 1;


const Effect = () => {
  // const API_Key = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=50ca7de3d2694d75921cb30e170384b9";
const theme = useContext(ThemeContext);

  const [id, setId] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const API_Key = `https://jsonplaceholder.typicode.com/photos/${id}`;

    async function fetchData() {
      try {
        const response = await fetch(API_Key);
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // console.clear();
      }
    }

    fetchData();
    // const Interval = setInterval( fetchData(), 3000);

    // return () => {
    //     clearInterval(Interval);
    // };
  }, [id]);

  return (
    <>
      <h1>This is Effect Hook Page</h1>
      <div className="card m-5 p-5 border-2 rounded shadow-lg" style={theme.Border}>
        <h1>{products.title}</h1>
        <img src={products.thumbnailUrl} alt={products.title} className="w-52 h-52" />
        <a href={products.url} className="mt-2 px-4 py-2 text-blue-500 cursor-pointer">Click here ...</a>
        <p>page {products.id} of {}</p>
        </div>
      <button
        onClick={() => setId((id) => id - 1)}
        className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-900 cursor-pointer"
      >
        Prev
      </button>
      <button
        onClick={() => setId((id) => id + 1)}
        className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-900 cursor-pointer"
      >
        Next
      </button>

      
    </>
  );
};

export default Effect;
