import React from 'react';
import'./Carts.css'

const Carts = (props) => {
    console.log(props.cart);
    return (
        <div className='cart'>
            <img src={props.cart.img} alt="" />
            <p>{props.cart.name}</p>
        </div>
    );
};

export default Carts;