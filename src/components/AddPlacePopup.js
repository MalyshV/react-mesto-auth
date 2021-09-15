import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const nameRef = React.useRef('');
  const linkRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    })
  }


  return(
    <PopupWithForm name="cardForm" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} textOnButton="Сохранить" onSubmit={handleSubmit}>
      <input id="placename" className="input-container__item" ref={nameRef} type="text" name="name" placeholder="Название" defaultValue="" tabIndex="1" minLength="2" maxLength="30" required />
      <span className="input-container__input-error" id="placename-error" />
      <input id="urlcard" type="url" className="input-container__item" ref={linkRef} name="link" placeholder="Ссылка на картинку" defaultValue="" tabIndex="2" required />
      <span className="input-container__input-error" id="urlcard-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;