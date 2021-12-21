import { madeCardsFilms, deleteALLCards } from './gener-cart.js'

import { getSearching } from './function-search.js'

import { selectChosenElement } from './save-chosen.js'

const BUTTON_RATING = document.getElementById('rating')
const BUTTON_RELEASE_DATE = document.getElementById('releaseDate')
const BUTTON_BOXOFFICE = document.getElementById('boxOffice')
const CONTROL_PANEL = document.querySelector('.sorting')

const BUTTON_FOR_SORTING = document.querySelectorAll('.sorting >.button')

function removeClass(arr, string) {
  arr.forEach((item) => {
    item.classList.remove(string)
  })
}

function clickOnInput(arr) {
  const gettargeteleme = document.querySelector('.search__input')
  gettargeteleme.addEventListener('click', () => {
    removeClass(BUTTON_FOR_SORTING, 'button_checked')
    getSearching(arr)
  })
}

function sortingElements(arr) {
  CONTROL_PANEL.addEventListener('click', (Event) => {
    let newobj = []

    removeClass(BUTTON_FOR_SORTING, 'button_checked')
    clickOnInput(arr)
    const { target } = Event

    switch (Event.target) {
      case BUTTON_RATING:
        target.classList.add('button_checked')
        newobj = arr.sort(function (a, b) {
          return b.imdbRating - a.imdbRating
        })
        deleteALLCards()
        break

      case BUTTON_RELEASE_DATE:
        target.classList.add('button_checked')
        newobj = arr.sort((a, b) => {
          return new Date(a.Released) - new Date(b.Released)
        })
        deleteALLCards()
        break

      case BUTTON_BOXOFFICE:
        target.classList.add('button_checked')
        newobj = arr.sort(function (a, b) {
          return a.BoxOffice - b.BoxOffice
        })
        deleteALLCards()
        break
    }

    madeCardsFilms(newobj)
    selectChosenElement(newobj)
  })
}

export { sortingElements, removeClass, BUTTON_FOR_SORTING }
