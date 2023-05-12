import React, { useEffect } from 'react';
import useTitle from '../../assets/hooks/useTitle';

const AddCoffee = () => {
    // For Dynamic Title
    useTitle('AddCoffee')
    return (
        <div>
            <h1>Add Your Coffee</h1>
        </div>
    );
};

export default AddCoffee;