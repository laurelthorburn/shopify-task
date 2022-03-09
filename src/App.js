import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 198355,
      name: "Fancy pen",
      description: "Write in red or blue!",
      price: 1000,
    },
    {
      id: 168031,
      name: "Bad pen",
      description: "Barely works, not worth the money",
      price: 2000,
    },
    {
      id: 296110,
      name: "Fabric softener",
      description: "From the other leading brand ",
      price: 1850,
    },
    {
      id: 183544,
      name: "Coffee cup",
      description: "Dark blue with an ergonomic handle",
      price: 1600,
    },
    {
      id: 174200,
      name: "Desk chair",
      description: "Your back will thank you",
      price: 120000,
    },
    {
      id: 203287,
      name: "Pillow",
      description: "Soft and cushiony",
      price: 5000,
    },
    {
      id: 107058,
      name: "Cactus",
      description: "Some greenery for your home",
      price: 2000,
    },
    {
      id: 226912,
      name: "Desk lamp",
      description: "Because who wants a dark office?",
      price: 6000,
    },
  ];

  const [clientInput, setClient] = useState("");

  const handleUserInput = (e) => {
    e.preventDefault();
    console.log("yay you made it here :)");
    console.log(clientInput);
  };

  return (
    <>
      <form onSubmit={handleUserInput}>
        <input onChange={(e) => setClient(e.target.value)}placeholder="Type Your Search Here" />
        <button disabled={!clientInput}>Submit</button>
        {products.map((product) => `- ${product.name}`)}
      </form>
    </>
  );
}

export default App;
