import { madeCardsFilms, getFilmsCards } from './gener-cart.js'

import { getSearching } from './function-search.js'

import { getToken, getFilmsData, arr } from './Api-request.js'

const buttonrating = document.getElementById('rating')
const buttonreleaseDate = document.getElementById('releaseDate')
const buttonboxOffice = document.getElementById('boxOffice')

function sortByRating(arr) {
  const gettargeteleme = document.querySelector('.search__input')
  buttonrating.addEventListener('click', () => {
    gettargeteleme.addEventListener('click', () => {
      buttonrating.classList.remove('button_checked')
      getSearching()
    })

    buttonrating.classList.add('button_checked')
    buttonreleaseDate.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')

    let newobj = arr.sort((a, b) => {
      return a.imdbRating - b.imdbRating
    })

    console.log(newobj)
    const cardElement = document.querySelectorAll('.card')
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }

    madeCardsFilms(newobj)
  })
}

function sortByDate(arr) {
  buttonreleaseDate.addEventListener('click', () => {
    const gettargeteleme = document.querySelector('.search__input')
    buttonreleaseDate.classList.add('button_checked')
    buttonrating.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      buttonreleaseDate.classList.remove('button_checked')
      getSearching()
    })

    let newobj = arr.sort((a, b) => {
      return new Date(a.Released) - new Date(b.Released)
    })

    const cardElement = document.querySelectorAll('.card')
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }
    madeCardsFilms(newobj)
  })
}

function sortbyTotalSum(arr) {
  buttonboxOffice.addEventListener('click', () => {
    const gettargeteleme = document.querySelector('.search__input')

    buttonboxOffice.classList.add('button_checked')
    buttonreleaseDate.classList.remove('button_checked')
    buttonrating.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      buttonboxOffice.classList.remove('button_checked')
      getSearching()
    })

    let newobj = arr.sort((a, b) => {
      return Number(a.BoxOffice) - Number(b.BoxOffice)
    })

    console.log(newobj)
    const cardElement = document.querySelectorAll('.card')
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }

    madeCardsFilms(newobj)
  })
}

export { sortByRating, sortByDate, sortbyTotalSum }
