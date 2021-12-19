function getToken() {
  return fetch('https://fe08-films.herokuapp.com/auth', {
    method: 'POST',
  })
    .then((tocken) => tocken.json())
    .then((tocken) => {
      let token = Object.values(tocken)

      const TOKENK = token[0]

      return TOKENK
    })
}

function getFilmsData(token) {
  return fetch('https://fe08-films.herokuapp.com/films', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Autorization: `Beare ${token}`,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      const DATA_FILMS = data.films
      return DATA_FILMS
    })
}

export { getFilmsData, getToken }
