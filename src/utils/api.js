class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
  })
  .then(this._checkResponse);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
    .then(this._checkResponse);
  }

  setUserAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
    .then(this._checkResponse);
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  setlike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25/',
  headers: {
    authorization: '61426457-aa06-4805-b055-d8aeddd40fb8',
    'Content-Type': 'application/json'
  }
});

export default api;

// мой токен: 61426457-aa06-4805-b055-d8aeddd40fb8
// идентификатор группы: cohort-25
