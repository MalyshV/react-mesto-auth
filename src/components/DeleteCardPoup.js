import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props){

  /*function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(props.card);
    console.log('?????????');
  }*/

  return(
    <PopupWithForm name="cardDeleteForm" title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose} textOnButton="Да">
    </PopupWithForm>
  )

  // Временно удалила onSubmit={handleSubmit};
}

export default DeleteCardPopup;