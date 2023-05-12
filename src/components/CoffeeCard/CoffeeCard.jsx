import React from "react";
import {MdDelete} from 'react-icons/md';
import {AiFillEye} from 'react-icons/ai';
import {HiPencil} from 'react-icons/hi';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { _id ,name, quantity, supplier, taste, category, details, photo } = coffee;





/* ---------Item Delete Function------------- */
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You Want to delete this Coffee!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3535d5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/coffees/${id}`,{
          method:'DELETE'

        } )
        .then( res => res.json())
        .then( data => {
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire(
              'Item Deleted!',
              'Your Coffee Deleted Successfully.',
              'success'
            )
          }
        })
       
      }
    })
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Coffee" />
        </figure>
        <div className="flex justify-between items-center w-full pe-5">
         
         <div>
          <h2 className="card-title">Name: {name} </h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
         </div>

          <div className="card-actions justify-end ">
            <div className="flex flex-col">
              <button className="btn mb-2  bg-[#D2B48C] hover:bg-[#7c6240] border-0 "><AiFillEye className="text-xl" /></button>

              <Link to={`/updateCoffee/${_id}`} className="btn mb-2 bg-[#3C393B] hover:bg-[#011d08] border-0"><HiPencil className="text-xl" /></Link>

              <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] hover:bg-[#9b0300] border-0"><MdDelete className="text-xl" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
