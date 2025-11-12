import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);
  console.log(coffees);

  return (
    <>
      <h1 className="text-6xl text-center text-purple-700 font-bold my-10">
        Coffee House
      </h1>
      <div className="text-center mb-10">
        <button className="btn btn-accent text-lg">
          <Link to="/addCoffee">Add Coffee</Link>
        </button>
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
