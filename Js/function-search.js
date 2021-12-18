import { madeCardsFilms } from './gener-cart.js'
import { saveChosenElement, selectChosenElement } from './save-chosen.js'

function getSearching(arr) {
  const inputElem = document.querySelector('.search__input')

  inputElem.oninput = (Event) => {
    const cardElement = document.querySelectorAll('.card')

    const titelelem = document.querySelectorAll('.card-header__title')

    let userText = Event.target.value

    if (userText != '') {
      cardElement.forEach((element) => {
        if (
          element
            .querySelector('.card-header__title')
            .innerHTML.search(userText) == -1
        ) {
          element.remove()
        }
      })
    } else {
      cardElement.forEach((element) => {
        element.remove()
      })
      madeCardsFilms(arr)
    }
    selectChosenElement(element)
  }
}

export { getSearching }
