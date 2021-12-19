function getToken() {
  return fetch('https://fe08-films.herokuapp.com/auth', {
    method: 'POST',
  })
    .then((tocken) => tocken.json())
    .then((tocken) => {
      let tk = Object.values(tocken)

      const tokenk = tk[0]

      return tokenk
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
      const dataFilms = data.films
      return dataFilms
    })
}

export { getFilmsData, getToken }
