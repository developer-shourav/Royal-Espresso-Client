import React, { useEffect } from "react";
import useTitle from "../../assets/hooks/useTitle";

const AddCoffee = () => {
  // For Dynamic Title
  useTitle("AddCoffee");


  const handleAddCoffee = event => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const quantity = form.quantity.value;
     const supplier = form.supplier.value;
     const taste = form.taste.value;
     const category = form.category.value;
     const details = form.details.value;
     const photo = form.photo.value;

     const newCoffee = {
        name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photo
     };
     console.log(newCoffee);

     fetch('http://localhost:7000/addCoffee', {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newCoffee)
     })
     .then( res => res.json())
     .then( data => {
        console.log(data);
        alert('Coffee Adding Successful')
        form.reset()
     })
     
  }



  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add A Coffee</h2>

      <form onSubmit={handleAddCoffee}>
        {/* ----------Name and Quantity Row---------- */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>


        </div>
        {/* ----------Coffee Supplier and Test Row---------- */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>


        </div>
        {/* ----------Coffee Categories and Details Row---------- */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>


        </div>
        {/* ----------From Photo URL Row---------- */}
        <div className="mb-8" >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo url"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>
        <input type="submit" className="btn btn-block" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
