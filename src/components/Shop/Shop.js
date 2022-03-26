import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Cart from "../Carts/Carts";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [choseCarts, setChoseCarts] = useState([]);

  useState(() => {
    fetch("name.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    // console.log(selectedProduct);
    const newCart = [...carts, product];

    if(newCart.length === 5){
        alert('you are selected 4 items')
    }
    else{
        setCarts(newCart);
    }
  };
  const choseHandle = () => {
    //     console.log(carts.length);
    // console.log(Math.floor(Math.random()))
    const chossed = Math.floor(Math.random() * carts.length);
    const newChossed = carts[chossed];
    setCarts([newChossed]);
    console.log(newChossed);
  };

  const handleRestart = () => {
    setCarts([]);
  };
  return (
    <div>
      <h1 className="container">Buy Your Phone</h1>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <h1>Selected Phone</h1>
          {carts.map((cart) => (
            <Cart cart={cart} key={cart.id}></Cart>
          ))}

          <button onClick={choseHandle} className="shop-btn-cart">
            Chosse One
          </button>
          <br />
          <button onClick={handleRestart} className="shop-btn-cart">
            Restart
          </button>
        </div>
      </div>
      <div className="info">
        <h1>How to react work?</h1>
        <p>
          React works in declarative code. In order to show what we mean by
          declarative code, we want to publish it as an app. Imagine the
          following code as an example. With a navigator, a title, a filter, and
          a list you see what the picture looks like on the screen below.
          Because every line of code declares what every element of the app is.
        </p>
        <h1>Different between props and steps?</h1>
        <p>
          One is props. Its read only. It can not be modified. Another one is
          steps. Steps change can be asynchronous. It can be modified using
          this.setState.
        </p>
      </div>
    </div>
  );
};

export default Shop;
