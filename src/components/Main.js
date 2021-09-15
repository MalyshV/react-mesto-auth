import React, { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return(
    <main className="content page__container">
      <section className="profile">
        <div className="profile__avatar">
          <button className="profile__icon page__buttons" onClick={props.onEditAvatar}>
            <img className="profile__image" alt="фото пользователя" src={currentUser.avatar} />
          </button>
          <div className="profile__info">
            <div className="profile__change">
              <h1 className="profile__user-name">{currentUser.name}</h1>
              <button className="profile__edit-button page__buttons" type="button" onClick={props.onEditProfile} />
            </div>
            <p className="profile__user-job">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button page__buttons" type="submit" onClick={props.onAddPlaceButtonClick} />
      </section>
      <section className="elements">
        <div className="elements__list">
          {props.cards.map(card => {
            return <Card key={card._id} {...card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onDeleteButtonClick={props.onDeleteButtonClick}/>
          })}
        </div>
      </section>
    </main>
  )
}

export default Main;