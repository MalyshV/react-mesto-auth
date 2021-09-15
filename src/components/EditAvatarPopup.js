import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return(
    <PopupWithForm name="userPhotoForm" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <input id="url" type="url" ref={avatarRef} className="input-container__item" name="avatar" placeholder="Ссылка на фото" defaultValue="" tabIndex="1" required />
      <span className="input-container__input-error" id="url-error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;