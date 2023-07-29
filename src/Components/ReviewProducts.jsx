import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'


const ReviewProducts = ({ products, handleCartRemove }) => {
    const { id, name, price, img, shipping, quantity } = products
    return (
        <div className='flex w-[571px] shadow-md border p-2 m-3 rounded-lg'>
            <img className='w-24 rounded-lg' src={img} alt="" />

            <div className='flex flex-grow items-center'>
                <div className='mx-2'>
                    <h1 className='text-2xl'>Name : {name}</h1>
                    <h1>Price : <span style={{ color: "#F90" }}>${price}</span></h1>
                    <h1>Shipping Charge :  <span style={{ color: "#F90" }}>${shipping}</span></h1>
                    <h1>Quantity :  <span style={{ color: "#F90" }}>${quantity}</span></h1>
                </div>
                <button onClick={() => handleCartRemove(id)} className='ml-auto bg-red-100 p-3 rounded-full'>
                    <TrashIcon className="h-6 w-6 text-red-400" />
                </button>
            </div>
        </div>
    );
};

export default ReviewProducts;