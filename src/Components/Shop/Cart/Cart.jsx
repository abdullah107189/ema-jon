import './Cart.css'
const Cart = (props) => {
    // const cart = props.cart; option 1
    // eslint-disable-next-line react/prop-types
    const { cart } = props;
    // console.log(cart);
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grand_total = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // console.log('product quantity',product.quantity);
        quantity = quantity + product.quantity;
        total = total + parseInt(product.price) * product.quantity;
        shipping = shipping + parseInt(product.shipping)
        tax = parseFloat((total / 100) * 7)
        grand_total = total + tax + shipping;
    }

    return (
        <div className='cart_container'>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <h6>Selected Items : {quantity}</h6>
            <h6>Total Price: ${total}</h6>
            <h6>Total Shipping Charge: ${shipping}</h6>
            <h6>Tax: ${tax.toFixed(2)}</h6>
            <h4>Grand Total: ${grand_total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;