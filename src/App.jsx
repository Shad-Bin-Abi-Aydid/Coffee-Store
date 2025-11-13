import { Link, Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);
  console.log(coffees);

  return (
    <>
      
      <Header></Header>
     
      <div className="text-center my-10">
        <h2 className="text-3xl text-cyan-700 font-extrabold">Available Coffees</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5 w-7xl mx-auto mb-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            onDelete={(id) =>
              setCoffees(coffees.filter((coffee) => coffee._id !== id))
            }
          ></CoffeeCard>
        ))}
      </div>
      
    </>
  );
}

export default App;
