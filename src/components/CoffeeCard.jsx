import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, onDelete }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete code is here
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              onDelete(_id);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-cyan-800 shadow-sm px-5">
      <figure>
        <img src={photoURL} alt="Movie" />
      </figure>
      <div className="flex w-full justify-around items-center">
        <div className="space-y-3">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Category: {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div
            className="flex flex-col gap-5 rounded-md shadow-xs"
            role="group"
          >
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              View
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Update
              </button>
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(_id)}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-red-400 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-red-400 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
