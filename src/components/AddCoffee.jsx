import React from "react";

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photoURL}

        console.log(newCoffee)
        
    }

  return (
    <div className="mx-5">
      <h2 className="text-center text-3xl mt-5 font-extrabold text-amber-600">
        Add a Coffee
      </h2>

      <form onSubmit={handleAddCoffee} className="bg-orange-300 max-w-xl md:max-w-2xl mx-auto p-6 mt-5 rounded-xl space-y-8">
        {/* Row 1 */}
        <div className="md:flex gap-4 mb-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Coffee Name:</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee name"
              className="input input-bordered w-full bg-gray-500"
            />
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Available Quantity:</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered w-full bg-gray-500"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="md:flex gap-4 mb-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Supplier:</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier"
              className="input input-bordered w-full bg-gray-500"
            />
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Taste:</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered w-full bg-gray-500"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Category:</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered w-full bg-gray-500"
            />
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Details:</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered w-full bg-gray-500"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="md:flex gap-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Photo URL:</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photoURL"
              className="input input-bordered w-full bg-gray-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn w-full bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-xl"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
