import { getFilmsCards } from './gener-cart.js'

function getToken() {
  return fetch('https://fe08-films.herokuapp.com/auth', {
    method: 'POST',
  })
    .then((tocken) => tocken.json())
    .then((tocken) => {
      let tk = Object.values(tocken)

      const tokenk = tk[0]
      getFilmsData(tokenk)
    })
}

function getFilmsData(token) {
  fetch('https://fe08-films.herokuapp.com/films', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Autorization: `Beare ${token}`,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      getFilmsCards(data.films)
    })

  return
}

export { getFilmsData, getToken }
