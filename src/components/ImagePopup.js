import React from 'react';

function ImagePopup(props) {
  return(
    <div className={`popup ${props.card.link ? 'popup_is-opened' : ''}`} onClose={props.onClose}>
      <div className="popup__content popup__content_theme_photo">
        <button className="popup__close page__buttons" type="button" onClick={props.onClose} />
        <figure className="popup__figure">
          <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__text">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;
