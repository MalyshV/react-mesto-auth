import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import PageNotFound from './PageNotFound';
import api from '../utils/api';
import * as auth from '../utils/auth';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectCard, setSelectCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const history = useHistory();

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

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setEmail(res.data.email);
          }
          setIsLoggedIn(true);
          history.push('/');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [isLoggedIn, history])

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
    setIsInfoTooltipOpen(false);
    //setIsDeletePlacePopupOpen(false); на время, пока карточка удаляется напрямую 
    setSelectCard({});
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleAddPlaceSubmit(data) {
    api.addNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleRegistration(email, password) {
    auth.register(email, password)
      .then(() => {
        setIsRegistered(true);
        handleInfoTooltipOpen();
        history.push('/sing-in');
      })
      .catch((error) => {
        setIsRegistered(false);
        handleInfoTooltipOpen();
        console.log(error);
      })
  }

  function handleAuthorization(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token)
        }
        setEmail(email);
        setIsLoggedIn(true);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true);
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header 
          email={email}
          handleSignOut={handleSignOut}
        />
        <Switch>
          <ProtectedRoute 
            exact path='/'
            component={Main}
            isLoggedIn={isLoggedIn}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlaceButtonClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onDeleteButtonClick={handleDeleteCard}
            //onDeleteButtonClick={handleDeletePlaceClick} временно убрала открытые попапа
            cards={cards}
          />
          <Route path='/sign-up'>
            <Register handleRegistration={handleRegistration} />
          </Route>
          <Route path='/sign-in'>
            <Login handleAuthorization={handleAuthorization} />
          </Route>
          <Route path='/'>
            { !isLoggedIn ? <Redirect to='/sign-in' /> : <Redirect to='/' /> }
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip 
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isRegistered={isRegistered}
          />
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