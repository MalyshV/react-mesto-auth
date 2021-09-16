import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {

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

    props.registration(email, password);
  }

  return(
    <div className="auth">
      <h1 claaName="auth__title">Регистрация</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="input-container">
          <input className="input-container__item input-container__item_type_dark" required id="username" name="username" placeholder="Email" type="text" onChange={handleChangeEmail} value={userEmail}/>
          <input className="input-container__item input-container__item_type_dark" required id="password" name="password" placeholder="Пароль" type="password" onChange={handleChangePassword} value={userPassword}/>
          <button type="submit" className="input-container__button input-container__button_type_dark">Зарегистрироваться</button>
        </fieldset>
      </form>
      <div className="auth__signup">
        <p>Уже зарегистрированы?</p>
        <Link className="auth__link" to="/sing-in">Войти</Link>
      </div>
    </div>
  )
}

export default Register;