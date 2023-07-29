/* eslint-disable react/prop-types */
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const { img, name, seller, ratings, price } = props.product;
    const addTocartBtn = props.addTocartBtn;
    return (
        <div className='product_container'>
            <div className="col">
                <div className="card">
                    <img src={img} className="image" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="card-text">
                            <h6>Price : ${price}</h6>
                            Manufacturer : {seller}
                            <br />
                            Rating : {ratings} start
                        </div>
                    </div>
                    <button onClick={() => { addTocartBtn(props.product) }} className='card-footer border-0 fw-bolder btn btn-danger'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;