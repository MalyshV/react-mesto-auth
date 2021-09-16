import React from 'react';
import logo from '../images/LogoVector.svg';
import { Switch, Route, Link } from 'react-router-dom';

function Header(props) {
  return(
    <header className="header page__container">
        <img className="header__logo" src={logo} alt="Логотип сервиса Mesto"/>
        <Switch>
          <Route exact path="/">
            <div className="header__loggedIn">
              <p>{props.email}</p>  
              <Link className="page__buttons" to="sing-in">Выйти</Link>
            </div>
          </Route>
          <Route path="/sing-up">
            <Link className="page__buttons" to="sing-in">Войти</Link>
          </Route>
          <Route path="/sing-in">
            <Link className="page__buttons" to="sing-in">Регистрация</Link>
          </Route>
        </Switch>
    </header>
  )
}

export default Header;