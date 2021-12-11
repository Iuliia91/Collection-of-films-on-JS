import { createCards, generatmokCart } from './gener-cart.js'

import { getSearching } from './function-search.js'

const buttonrating = document.getElementById('rating')
const buttonreleaseDate = document.getElementById('releaseDate')
const buttonboxOffice = document.getElementById('boxOffice')

function sortByRating() {
  const gettargeteleme = document.querySelector('.search__input')
  buttonrating.addEventListener('click', () => {
    gettargeteleme.addEventListener('click', () => {
      buttonrating.classList.remove('button_checked')
      getSearching()
    })

    buttonrating.classList.add('button_checked')
    buttonreleaseDate.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')

    let newobj = generatmokCart().sort((a, b) => {
      return a.rating - b.rating
    })

    const cardElement = document.querySelectorAll('.card')
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }

    createCards(newobj)
  })
}

function sortByDate() {
  buttonreleaseDate.addEventListener('click', () => {
    const gettargeteleme = document.querySelector('.search__input')
    buttonreleaseDate.classList.add('button_checked')
    buttonrating.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      buttonreleaseDate.classList.remove('button_checked')
      getSearching()
    })

    let newobj = generatmokCart().sort((a, b) => {
      return new Date(a.releseDate) - new Date(b.releseDate)
    })

    const cardElement = document.querySelectorAll('.card')
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }
    createCards(newobj)
  })
}

function sortbyTotalSum() {
  buttonboxOffice.addEventListener('click', () => {
    const gettargeteleme = document.querySelector('.search__input')

    buttonboxOffice.classList.add('button_checked')
    buttonreleaseDate.classList.remove('button_checked')
    buttonrating.classList.remove('button_checked')

    gettargeteleme.addEventListener('click', () => {
      buttonboxOffice.classList.remove('button_checked')
      getSearching()
    })

    let newobj = generatmokCart().sort((a, b) => {
      return a.totalSum - b.totalSum
    })

    const cardElement = document.querySelectorAll('.card')
    for (let i = 0; i < cardElement.length; i++) {
      cardElement[i].remove()
    }

    createCards(newobj)
  })
}

export { sortByRating, sortByDate, sortbyTotalSum }
