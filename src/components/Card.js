import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ owner, onCardClick, onDeleteButtonClick, onCardLike, link, name, ...props }){
  const currentUser = useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `${isOwn ? 'element__delete-button' : 'element__delete-button_hidden'}`
  );

  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `${isLiked? 'element__like-button_active' : 'element__like-button'}`;

  function handleClick() {
    onCardClick({name: name, link: link});
  }

  function handleDeletePlaceClick() {
    onDeleteButtonClick(props);
  }

  function handleLikeClick() {
    onCardLike(props);
  }

  return(
    <div className="element">
      <img className="element__image" src={link} alt={name} onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-area">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} />
          <span className="element__like-counter">{props.likes.length}</span>
        </div>
        <button className={cardDeleteButtonClassName} type="reset" onClick={handleDeletePlaceClick} />
      </div>
    </div>
  )
}

export default Card;