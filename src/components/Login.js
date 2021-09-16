import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {

  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const email = userEmail;
    const password = userPassword;

    props.authorization(email, password);
  }

  return(
    <div className="auth">
      <h1 className="auth__title">Вход</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="input-container">
          <input className="input-container__item input-container__item_type_dark" required name="username" placeholder="Email" type="text" onChange={handleChangeEmail} value={userEmail}/>
          <input className="input-container__item input-container__item_type_dark" required name="password" placeholder="Пароль" type="password" onChange={handleChangePassword} value={userPassword}/>
          <button type="submit" className="input-container__button input-container__button_type_dark">Войти</button>
        </fieldset>
      </form>
  </div>
  )
}

export default Login;