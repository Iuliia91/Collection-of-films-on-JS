import { madeCardsFilms, getFilmsCards } from './gener-cart.js'

import { getSearching } from './function-search.js'

import { saveChosenElement, selectChosenElement } from './save-chosen.js'

const BUTTON_RATING = document.getElementById('rating')
const BUTTON_RELEASE_DATE = document.getElementById('releaseDate')
const BUTTON_BOXOFFICE = document.getElementById('boxOffice')

function sortByRating(arr) {
  const gettargeteleme = document.querySelector('.search__input')

  BUTTON_RATING.addEventListener('click', () => {
    gettargeteleme.addEventListener('click', () => {
      BUTTON_RATING.classList.remove('button_checked')
      getSearching(arr)
    })

    BUTTON_RATING.classList.add('button_checked')
    BUTTON_RELEASE_DATE.classList.remove('button_checked')
    BUTTON_BOXOFFICE.classList.remove('button_checked')
    let newobj = []

    newobj = arr.sort(function (a, b) {
      return a.imdbRating - b.imdbRating
    })

    const cardElement = document.querySelectorAll('.card')

    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }

    madeCardsFilms(newobj)
    selectChosenElement(newobj)
    saveChosenElement()
  })
}

function sortByDate(arr) {
  BUTTON_RELEASE_DATE.addEventListener('click', () => {
    const gettargeteleme = document.querySelector('.search__input')
    BUTTON_RELEASE_DATE.classList.add('button_checked')
    BUTTON_RATING.classList.remove('button_checked')
    BUTTON_BOXOFFICE.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      BUTTON_RELEASE_DATE.classList.remove('button_checked')
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
  BUTTON_BOXOFFICE.addEventListener('click', () => {
    const gettargeteleme = document.querySelector('.search__input')

    BUTTON_BOXOFFICE.classList.add('button_checked')
    BUTTON_RELEASE_DATE.classList.remove('button_checked')
    BUTTON_RATING.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      BUTTON_BOXOFFICE.classList.remove('button_checked')
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
