import React from 'react';
import logo from '../../images/logo.svg'
import'./Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/login">Login</a>
                <a href="/sign up">Sign up</a>
                <a href="/contracts">Contracts</a>
            </div>
        </nav>
    );
};

export default Header;