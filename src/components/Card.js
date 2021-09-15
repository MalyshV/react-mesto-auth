import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props){
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `${isOwn ? 'element__delete-button' : 'element__delete-button_hidden'}`
  );

  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `${isLiked? 'element__like-button_active' : 'element__like-button'}`;

  function handleClick() {
    props.onCardClick(props);
  }

  function handleDeletePlaceClick() {
    props.onDeleteButtonClick(props);
  }

  function handleLikeClick() {
    props.onCardLike(props);
  }

  return(
      <div key={props.id} className="element">
        <img className="element__image" src={props.link} alt={props.name} onClick={handleClick} />
        <div className="element__description">
          <h2 className="element__title">{props.name}</h2>
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