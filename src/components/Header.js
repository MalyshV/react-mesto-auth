import React, { useState } from 'react';
import logo from '../images/LogoVector.svg';
import { Switch, Route, Link } from 'react-router-dom';
import Burger from './../images/Burger.svg';
import BurgerClose from './../images/BurgerClose.svg';

function Header(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleBurgerMenuClick() {
    setIsClicked(true);
    console.log('и покажи логин/пароль');
  }

  return(
    <header className={`header page__container ${isClicked ? '' : ''}`}>
      {isClicked && 
        <div className="header__loggedIn header__burger">
          <p className="header__email-container">{props.email}</p>  
          <Link className="page__buttons" to="/sign-in" onClick={props.handleSignOut}>Выйти</Link>
        </div>
      }
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="Логотип сервиса Mesto"/>
          <Switch>
            <Route exact path="/">
              <button className="header__button" onClick={handleBurgerMenuClick}>
                <img src={isClicked ? BurgerClose : Burger} />
              </button>
              <div className="header__loggedIn">
                <p className="header__email-container">{props.email}</p>  
                <Link className="page__buttons" to="/sign-in" onClick={props.handleSignOut}>Выйти</Link>
              </div>
            </Route>
            <Route path="/sign-up">
              <Link className="page__buttons header__link" to="/sign-in">Войти</Link>
            </Route>
            <Route path="/sign-in">
              <Link className="page__buttons header__link" to="/sign-up">Регистрация</Link>
            </Route>
          </Switch>
      </div>
    </header>
  )
}

export default Header;

//<img src={isClicked ? BurgerClose: Burger} />