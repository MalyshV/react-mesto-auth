import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatar
    });
  }

  return(
    <PopupWithForm name="userPhotoForm" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <input id="url" type="url" className="input-container__item" name="avatar" placeholder="Ссылка на фото" value={avatar || ''} tabIndex="1" required onChange={handleAvatarChange} />
      <span className="input-container__input-error">Введите ссылку</span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;