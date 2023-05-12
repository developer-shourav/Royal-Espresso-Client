import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    // For Dynamic Title
    useTitle('Update Coffee')

    const coffeeData = useLoaderData();
    const { _id ,name, quantity, supplier, taste, category, details, photo } = coffeeData;
    console.log(coffeeData);
    return (
        <div>
            <h1>Update Coffee : {name}</h1>
        </div>
    );
};

export default UpdateCoffee;


