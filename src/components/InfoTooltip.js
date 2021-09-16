import React from 'react';
import wrigth from './../images/wright.svg';
import wrong from './../images/wrong.svg';

function InfoTooltip(props) {
  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close page__buttons" type="button" onClick={props.onClose} />
        <img className="popup__icon" src={props.isRegistered ? wrigth : wrong} alt="статус регистрации" />
        <h2 className="popup__title">{props.isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;