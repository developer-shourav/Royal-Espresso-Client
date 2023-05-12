import React from "react";
import { useLoaderData } from "react-router-dom";

function App() {
  const allCoffees = useLoaderData();
  console.log(allCoffees);
  return (
    <>
       <h2 className="text-3xl text-center">Total Coffees: {allCoffees?.length}</h2>
    </>
  );
}

export default App;
