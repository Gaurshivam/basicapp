import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <img src="https://th.bing.com/th?id=OIP.rsSJYKLtbq9q9GiGa0-4fAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
        alt="logoimage" className='Image' 
        />
        <h1 className='name'>Shivam Gaur</h1>
      </div>
      <div className="head">
        <a href="www.google.com">Home</a>
        <a href="www.google.com">About</a>
        <a href="www.google.com">Contact</a>
      </div>
      <div className="social">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}

export default Header;
