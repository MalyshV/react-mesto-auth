import React, { useRef, useState, useCallback, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function validator() {
  // true if error
  // false is correct
}

const validators = {
  avatar: {
    isUrl: (value) => { return !/["https://.*"]/.test(value); }
  }
};

function EditAvatarPopup(props) {
  const avatarRef = useRef('');

  const [formValues, setFormValues] = useState({
    avatar: '',
  });

  const [errors, setErrors] = useState({
    avatar: {
      isUrl: true,
    }
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value}));
  }, [setFormValues]);

  useEffect(function validateInputs() {
    const { avatar } = formValues;

    const avatarValidationResult = Object.keys(validators.avatar).map(
      errorKey => {
        const errorResult = validators.avatar[errorKey](avatar);

        return { [errorKey]: errorResult }
      }
    ).reduce((acc, el) => ({...acc, ...el}), {});
    
    setErrors({
      avatar: avatarValidationResult
    });
  }, [formValues, setErrors]);

  const { avatar } = formValues;
  //const isAvatarValid = Object.values(errors.avatar).some(Boolean);
  //передать кнопке: disabled={isSubmitDisabled}
  //const isSubmitDisabled = isAvatarValid;

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  } 

  return(
    <PopupWithForm name="userPhotoForm" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} textOnButton="Сохранить">
      <input id="url" type="url" ref={avatarRef} className="input-container__item" name="avatar" placeholder="Ссылка на фото" value={avatar} tabIndex="1" required onChange={handleInputChange} />
      { errors.avatar.isUrl && <span className="input-container__input-error input-container__input-error_active">Введите ссылку</span> }
    </PopupWithForm>
  )
}

export default EditAvatarPopup;