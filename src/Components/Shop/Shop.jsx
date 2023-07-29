import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import './Shop.css'
import Product from './Product/Product';
import Cart from './Cart/Cart';
import { addToDb, getShoppingCart } from '../../fakedb';
const Shop = () => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step - 1: get id of the added product
        for (const id in storedCart) {
            // step - 2: find product in using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step - 3: set quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step -4 : add to added product in the save cart 
                saveCart.push(addedProduct);
            }
        }
        // step -5: set the cart 
        setCart(saveCart);
    }, [products])

    const addTocartBtn = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            console.log('exists', exists)
            product.quantity = 1
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining , exists]
        }
        setCart(newCart);
        // localStorage id added 
        addToDb(product.id);
    }
    return (
        <div className="shop_container">
            <div className='products_container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addTocartBtn={addTocartBtn}
                    ></Product>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                ></Cart>

            </div>
        </div >
    );
};

export default Shop;