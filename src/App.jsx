import React from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";

function App() {
  const allCoffees = useLoaderData();
  console.log(allCoffees);
  return (
    <div className="my-10 container mx-auto">
       <h2 className="text-3xl text-center mb-5">Total Coffees: {allCoffees?.length}</h2>

       {/* ----------Coffee Card--------- */}
       <div className="grid md:grid-cols-2 gap-8 ">
         {
          allCoffees.map( coffee => <CoffeeCard
          key={coffee?._id}
          coffee={coffee}
          > 

          </CoffeeCard>)
         }
       </div>
    </div>
  );
}

export default App;
