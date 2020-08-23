import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../product/product';
import Cart from '../cart/cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart ,setCart] = useState([]);
    
    const handleAddProduct = (product) =>{
        // console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product handleAddProduct = {handleAddProduct} product={product} ></Product>)
                }               
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;