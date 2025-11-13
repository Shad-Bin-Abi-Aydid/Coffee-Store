import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photoURL } =
    coffee;
    const navigate = useNavigate()
  console.log(coffee);

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const UpdatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };

    console.log(UpdatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate('/');

        }
      });
  };

  return (
    <div className="mx-5 p-10">
      <button className="btn btn-ghost underline text-lg text-blue-500">
        <Link to="/">Back</Link>
      </button>
      <h2 className="text-center text-3xl mt-5 font-extrabold text-amber-600">
        Update a Coffee: {name}
      </h2>

      <form
        onSubmit={handleUpdateCoffee}
        className="bg-orange-300 max-w-xl md:max-w-2xl mx-auto p-6 mt-5 rounded-xl space-y-8"
      >
        {/* Row 1 */}
        <div className="md:flex gap-4 mb-4">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Coffee Name:</span>
            </label>
            <input
              required
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered w-full bg-gray-500"
            />
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Available Quantity:</span>
            </label>
            <input
              required
              type="text"
              name="quantity"
              defaultValue={quantity}
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
              required
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input input-bordered w-full bg-gray-500"
            />
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Taste:</span>
            </label>
            <input
              required
              type="text"
              name="taste"
              defaultValue={taste}
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
              defaultValue={category}
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
              defaultValue={details}
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
              defaultValue={photoURL}
              className="input input-bordered w-full bg-gray-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn w-full bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-xl"
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
