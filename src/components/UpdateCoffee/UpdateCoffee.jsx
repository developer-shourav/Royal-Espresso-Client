import React from 'react';
import useTitle from '../../hooks/useTitle';

const UpdateCoffee = () => {
    // For Dynamic Title
    useTitle('Update Coffee')
    return (
        <div>
            <h1>Update Coffee</h1>
        </div>
    );
};

export default UpdateCoffee;


