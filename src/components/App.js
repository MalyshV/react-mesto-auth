import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPoup'; 
import InfoTooltip from './InfoTooltip';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import api from '../utils/api';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectCard, setSelectCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  //const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] = useState(false); 

  useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ])
    .then(([userData, cardsData]) => {
      setCurrentUser(userData);
      setCards(cardsData);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const changeLikeCardStatus = isLiked? api.removeLike(card._id) : api.setlike(card._id);
    
    changeLikeCardStatus.then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleDeleteCard(card) {
    api.removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleCardClick(card) {
    setSelectCard({ name: card.name, link: card.link })
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  /*function handleDeletePlaceClick() { временно закроем попап с подтверждением удаления карточки
    setIsDeletePlacePopupOpen(true); и реализуем удаление карточки напрямую
  }*/

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    //setIsDeletePlacePopupOpen(false); на время, пока карточка удаляется напрямую 
    setSelectCard({});
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddPlaceSubmit(data) {
    api.addNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  } 

  function registration(email, password) {}
  function authorization(email, password) {}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Switch>
          <Route path='/sing-up'>
            <Register registration={registration}/>
          </Route>
          <Route path='/sing-in'>
            <Login authorization={authorization}/>
          </Route>
          <Route path='/'>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/sing-in" />}
          </Route>
          <ProtectedRoute 
            exact path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlaceButtonClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onDeleteButtonClick={handleDeleteCard}
            //onDeleteButtonClick={handleDeletePlaceClick} временно убрала открытые попапа
            cards={cards}
          />
        </Switch>
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup
          card={selectCard}
          onClose={closeAllPopups}
        />
        <DeleteCardPopup
          //onClose={closeAllPopups} // закомментила на время пока в доработке
          //card={selectCard}
          //onSubmit={handleDeleteCard}
          //isOpen={isDeletePlacePopupOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;