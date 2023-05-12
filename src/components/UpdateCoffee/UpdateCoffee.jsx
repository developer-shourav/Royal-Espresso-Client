import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    // For Dynamic Title
    useTitle('Update Coffee')

    const coffeeData = useLoaderData();
    const { _id ,name, quantity, supplier, taste, category, details, photo } = coffeeData;


    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
   
        const updatedCoffee = {
           name,
           quantity,
           supplier,
           taste,
           category,
           details,
           photo
        };
   
        // Send Data to the server
   
        fetch(`http://localhost:7000/updateCoffee/${_id}`, {
           method:'PUT',
           headers: {
               'content-type':'application/json'
           },
           body: JSON.stringify(updatedCoffee)
        })
        .then( res => res.json())
        .then( data => {
           if(data?.acknowledged){
               Swal.fire(
                   'Good job!',
                   'Your Coffee Updated Successfully!',
                   'success'
                 )
               form.reset()
           }
           
        })
        
     }
    return (
        <div className="bg-[#F4F3F0] p-24 w-10/12 mx-auto">
      <h2 className="text-3xl font-bold">Update <span className='font-extrabold'>{name}</span></h2>

      <form onSubmit={handleUpdateCoffee}>
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
                defaultValue={name}
                className="input input-bordered w-full"
                required
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
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                required
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
                defaultValue={supplier}
                className="input input-bordered w-full"
                required
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
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
                required
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
                defaultValue={category}
                className="input input-bordered w-full"
                required
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
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
                required
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
                defaultValue={photo}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

        </div>
        <input type="submit" className="btn btn-block" value="Update Coffee info" />
      </form>
    </div>
    );
};

export default UpdateCoffee;


