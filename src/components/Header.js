import React from 'react';
import logo from '../images/LogoVector.svg';
import { Switch, Route, Link } from 'react-router-dom';
import Burger from './../images/Burger.svg';
import BurgerClose from './../images/BurgerClose.svg';

function Header(props) {
  return(
    <header className="header page__container">
        <img className="header__logo" src={logo} alt="Логотип сервиса Mesto"/>
        <Switch>
          <Route exact path="/">
            <button className="header__button" />
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
    </header>
  )
}

export default Header;

//<img src={props.isRegistered ? BurgerClose: Burger} />