import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photoURL } =
    coffee;
  return (
    <div className="card card-side bg-cyan-950 shadow-sm p-4">
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
          <div class="flex flex-col gap-5 rounded-md shadow-xs" role="group">
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              View
            </button>
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b rounded-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Update
            </button>
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
