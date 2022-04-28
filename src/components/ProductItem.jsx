import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';
import '../styles/ProductItem.scss';

const ProductItem = ({product}) => {
    const {addToCart} = useContext(AppContext);
    const handleClick = item => {
        addToCart(item);
    }
    return (
        <div className="ProductItem">
            {/*<img src={product.images[0]} alt={product.title} /> */}
            <img src={bt_add_to_cart} alt="" />
            <div className="product-info">
                <div>
                    {/*<p>${product.price}</p>
                    <p>{product.title}</p>*/}

                    <p>$100</p>
                    <p>item</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={bt_add_to_cart} />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;