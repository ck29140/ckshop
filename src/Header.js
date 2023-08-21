import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
      <div className="header">
        <div className="header_logo">
          <StorefrontIcon className='header_logoImage' fontSize='large'></StorefrontIcon>
          <h2 className='header_logoTitle' >SOMRAS</h2>
        </div>
        <div className="header_searchbar">
          <input type = "text" className='header_searchbarInput'></input>
          <SearchIcon className='search_logo'></SearchIcon>
        </div>
        <div className="header_nav">
          <div className="nav_item">
            <span className="nav_itemlineone">Hello CK</span>
            <span className="nav_itemlinetwo">Sign In</span>
          </div>
          <div className="nav_item">
            <span className="nav_itemlineone">Your</span>
            <span className="nav_itemlinetwo">Shop</span>
          </div>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon fontSize='large'></ ShoppingBasketIcon>
            <span className="nav_itemlinetwo basket_count">0</span>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Header;