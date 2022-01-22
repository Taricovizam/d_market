import React from 'react';
import "../css/header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img className="header__logo" src={require("./logo.png")} alt="Daftra" />

      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchIcon className='header__search__icon' />
      </div>

      <div className="header__nav">
        <div className="header__nav__option">
          <span className="option__lineOne">Hello Guest,</span>
          <span className="option__lineTwo">Sign Out</span>
        </div>
        <div className="header__nav__option">
          <span className="option__lineOne">Hello Guest,</span>
          <span className="option__lineTwo">Sign Out</span>

        </div>
        <div className="header__nav__option">
          <span className="option__lineOne">Hello Guest,</span>
          <span className="option__lineTwo">Sign Out</span>
        </div>
      </div>
      <div className="header__basket">
        <ShoppingBasketIcon className='header__basket__icon' />
        <span className="header__basket__count option__lineTwo">0</span>
      </div>
    </div>
  )
}

export default Header;
