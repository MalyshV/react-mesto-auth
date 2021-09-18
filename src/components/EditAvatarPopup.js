import React, { useRef, useState, useCallback, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = useRef('');

  const [formValues, setFormValues] = useState({
    avatar: '',
  });

  const [formValidity, setFormValidity] = useState({
    avatarValid: false,
  })

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value}));
  }, [setFormValues]);

  useEffect(function validateInputs() {
    const isAvatarFilled = formValues.avatar.length > 10;
    const isAvatarValid = isAvatarFilled;

    setFormValidity(prevValidity => ({
      avatarValid: isAvatarValid,
    }));
  }, [formValues, setFormValidity]);

  const { avatar } = formValues;
  console.log(formValues);

  const { avatarValid } = formValidity;

  //передать кнопке: disabled={isSubmitDisabled}
  //const isSubmitDisabled = !avatarValid;

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return(
    <PopupWithForm name="userPhotoForm" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <input id="url" type="url" ref={avatarRef} className="input-container__item" name="avatar" placeholder="Ссылка на фото" value={avatar} tabIndex="1" required onChange={handleInputChange} />
      {!avatarValid && <div>Введите корректную ссылку</div>}
      <span className="input-container__input-error" id="url-error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;