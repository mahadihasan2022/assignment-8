import React from 'react';
import'./Products.css'

const Products = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Buy Your Phone</h2>
            </div>
            <div className="cart-container">
                <h3>Selected Phone</h3>
            </div>
        </div>
    );
};

export default Products;