import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName]  = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return(
    <PopupWithForm name="profileForm" title="Редактировать профиль" textOnButton="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input id="username" className="input-container__item" value={name || ''} onChange={handleNameChange} type="text" name="name"  placeholder="Имя" tabIndex="1" minLength="2" maxLength="40" />
      <span className="input-container__input-error" id="username-error" />
      <input id="job" className="input-container__item" value={description || ''} onChange={handleDescriptionChange} type="text" name="about" placeholder="Профессия" tabIndex="2" minLength="2" maxLength="200" />
      <span className="input-container__input-error" id="job-error" />
    </PopupWithForm>
  )
}

export default EditProfilePopup;