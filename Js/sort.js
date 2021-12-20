import { madeCardsFilms, getFilmsCards } from './gener-cart.js'

import { getSearching } from './function-search.js'

import { selectChosenElement } from './save-chosen.js'

const BUTTON_RATING = document.getElementById('rating')
const BUTTON_RELEASE_DATE = document.getElementById('releaseDate')
const BUTTON_BOXOFFICE = document.getElementById('boxOffice')

const CONTROL_PANEL = document.querySelector('.sorting')

function removeClassInButton() {
  const BUTTON_FOR_SORTING = document.querySelectorAll('.sorting >.button')
  BUTTON_FOR_SORTING.forEach((item) => {
    item.classList.remove('button_checked')
  })
}

function clickOnInput(arr) {
  const gettargeteleme = document.querySelector('.search__input')
  gettargeteleme.addEventListener('click', () => {
    removeClassInButton()
    getSearching(arr)
  })
}

function deleteALLCards() {
  const cardElement = document.querySelectorAll('.card')

  for (let i = 0; i < cardElement.length; i++) {
    cardElement[i].remove()
  }
}

function sortingElements(arr) {
  CONTROL_PANEL.addEventListener('click', (Event) => {
    let newobj = []
    removeClassInButton()
    clickOnInput(arr)
    const { target } = Event
    target.classList.add('button_checked')

    switch (Event.target) {
      case BUTTON_RATING:
        newobj = arr.sort(function (a, b) {
          return b.imdbRating - a.imdbRating
        })
        deleteALLCards()
        break

      case BUTTON_RELEASE_DATE:
        newobj = arr.sort((a, b) => {
          return new Date(a.Released) - new Date(b.Released)
        })
        deleteALLCards()
        break

      case BUTTON_BOXOFFICE:
        newobj = arr.sort(function (a, b) {
          return b.BoxOffice - a.BoxOffice
        })
        deleteALLCards()
        break
    }

    madeCardsFilms(newobj)
    selectChosenElement(newobj)
  })
}

export { sortingElements }
