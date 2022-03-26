import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(() =>{
fetch('name.json')
.then(res => res.json())
.then(data => setProducts(data))
    },[])
    const handleAddToCart = (product)=>{
        console.log(product);
        // cart.push(product);
        const newCart =[...cart, product];
        setCart(newCart);
    }
    return (
     <div>
            <h1 className='container'>Buy Your Phone</h1>
        <div className='shop-container'>
            <div className="products-container">
              {
                  products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
     </div>
    )
}

export default Shop;