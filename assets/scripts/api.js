const store = require('./store')
const config = require('./config')

const signUp = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const createSong = function (data) { // this is the POST verb
  return $.ajax({
    url: config.apiOrigin + 'songs',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getFavoriteSongs = function () {
  return $.ajax({
    url: config.apiOrigin + 'favorite_songs',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  createSong,
  getFavoriteSongs
}
