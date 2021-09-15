import React from 'react';
import logo from '../images/LogoVector.svg';

function Header() {
  return(
    <header className="header page__container">
        <img className="header__logo" src={logo} alt="Логотип сервиса Mesto"/>
    </header>
  )
}

export default Header;