import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser, setAvatar])

  const handleSubmit = e => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar
    });
    setAvatar('');
  }

  return(
    <PopupWithForm name="userPhotoForm" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <input id="url" type="url" className="input-container__item" name="avatar" placeholder="Ссылка на фото" value={avatar || ''} tabIndex="1" required onChange={handleAvatarChange} />
      <span className="input-container__input-error">Введите ссылку</span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;