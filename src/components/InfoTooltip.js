import React from 'react';
import wrigth from './../images/wright.svg';
import wrong from './../images/wrong.svg';

function InfoTooltip({ isOpen, isRegistered, onClose }) {
  return(
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content popup__content_theme_auth">
        <button className="popup__close page__buttons" type="button" onClick={onClose} />
        <img className="popup__icon" src={isRegistered ? wrigth : wrong} alt="статус регистрации" />
        <h2 className="popup__title popup__title_theme_auth">{isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;