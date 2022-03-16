import React, { useEffect, useState } from "react";
import "./App.css";
import SearchResults from "./SearchResults";

// TODO: edge case, when user !error and gets results, need to allow them to search again from the original array
//TODO: style

function App() {
  const productsArray = [
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

  const [products, setProducts] = useState(productsArray);

  const [clientInput, setClient] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("USE EFFECT RUN");
    console.log(clientInput);
  }, [clientInput]);

  const handleUserInput = (e) => {
    e.preventDefault();

    //filter array based off what user picks
    const modifyInput = clientInput.toLowerCase().trim();
    setClient(modifyInput);

    const results = productsArray.filter((product) => {
      const arrayName = product.name.toLowerCase();
      const arrayDescription = product.description.toLowerCase();
      return (
        arrayName.includes(modifyInput) ||
        arrayDescription.includes(modifyInput)
      );
    });

    if (results.length > 0) {
      setProducts(results);
    } else {
      setProducts(productsArray);
      setError("No product found");
    }
  };
  // console.log(results)

  return (
    <>
      <form onSubmit={handleUserInput} className="mainBg">
        <div className="searchCard">
          <input
            onChange={(e) => setClient(e.target.value)}
            placeholder="Type Your Search Here"
            value={clientInput}
            required
          />
          <button type="submit">Submit</button>
        </div>
        <SearchResults results={products} />
        <p>{error}</p>
      </form>
    </>
  );
}

export default App;
