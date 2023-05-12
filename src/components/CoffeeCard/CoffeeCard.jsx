import React from "react";
import {MdDelete} from 'react-icons/md';
import {AiFillEye} from 'react-icons/ai';
import {HiPencil} from 'react-icons/hi';

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
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
              <button className="btn mb-2 bg-[#3C393B] hover:bg-[#011d08] border-0"><HiPencil className="text-xl" /></button>
              <button className="btn bg-[#EA4744] hover:bg-[#9b0300] border-0"><MdDelete className="text-xl" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
