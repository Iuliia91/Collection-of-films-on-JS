import { madeCardsFilms, getFilmsCards } from './gener-cart.js'

import { getSearching } from './function-search.js'

import { saveChosenElement, selectChosenElement } from './save-chosen.js'

const BUTTON_RATING = document.getElementById('rating')
const buttonreleaseDate = document.getElementById('releaseDate')
const buttonboxOffice = document.getElementById('boxOffice')

function sortByRating(arr) {
  const gettargeteleme = document.querySelector('.search__input')

  BUTTON_RATING.addEventListener('click', () => {
    gettargeteleme.addEventListener('click', () => {
      BUTTON_RATING.classList.remove('button_checked')
      getSearching(arr)
    })

    BUTTON_RATING.classList.add('button_checked')
    buttonreleaseDate.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')
    let newobj = []

    newobj = arr.sort(function (a, b) {
      return a.imdbRating - b.imdbRating
    })

    const cardElement = document.querySelectorAll('.card')

    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }

    selectChosenElement()
    saveChosenElement()
    madeCardsFilms(newobj)
  })
}

function sortByDate(arr) {
  buttonreleaseDate.addEventListener('click', () => {
    const gettargeteleme = document.querySelector('.search__input')
    buttonreleaseDate.classList.add('button_checked')
    BUTTON_RATING.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      buttonreleaseDate.classList.remove('button_checked')
      getSearching(arr)
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
    BUTTON_RATING.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      buttonboxOffice.classList.remove('button_checked')
      getSearching(arr)
    })

    let newobj = arr.sort((a, b) => {
      return Number(a.BoxOffice) - Number(b.BoxOffice)
    })

    const cardElement = document.querySelectorAll('.card')
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }

    madeCardsFilms(newobj)
  })
}

export { sortByRating, sortByDate, sortbyTotalSum }
