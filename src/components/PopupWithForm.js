import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''}`}>
    <div className="popup__content popup__content_theme_input">
      <button className="popup__close page__buttons" type="button" onClick={props.onClose} />
      <h2 className="popup__title">{props.title}</h2>
      <form className="form" action="#" name={props.name} onSubmit={props.onSubmit}>
        <fieldset className="input-container">
          {props.children}
          <button type="submit" className="input-container__button">{props.textOnButton}</button>
        </fieldset>
      </form>
    </div>
  </div>
  )
}

export default PopupWithForm;