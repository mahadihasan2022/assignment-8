import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h3>Selected Phones</h3>
             <p>select: {cart.length}</p>
        </div>
    );
};

export default Cart;