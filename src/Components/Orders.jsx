import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Shop/Cart/Cart';
import ReviewProducts from './ReviewProducts';
import { removeFromDb } from '../fakedb';

const Orders = () => {
    const products = useLoaderData();
    // console.log(products);
    const [cart, setCart] = useState(products);

    const handleCartRemove = (id) => {
        const reamining = cart.filter(product => product.id !== id);
        setCart(reamining);
        removeFromDb(id)
    }
    return (
        <div className='flex justify-center'>
            <div className=''>
                {cart.map(
                    product =>
                        <ReviewProducts
                            key={product.id}
                            products={product}
                            handleCartRemove={handleCartRemove}
                        ></ReviewProducts>
                )}
            </div>
            <div>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div >
    );
};

export default Orders;